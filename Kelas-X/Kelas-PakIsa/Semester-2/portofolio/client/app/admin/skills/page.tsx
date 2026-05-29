'use client';

import React, { useEffect, useState } from 'react';
import api from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus, Edit, Trash2, Loader2 } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  proficiency_level: string;
}

export default function AdminSkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [category, setCategory] = useState<'frontend' | 'backend' | 'tools'>('frontend');
  const [proficiencyLevel, setProficiencyLevel] = useState('');
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [saving, setSaving] = useState(false);

  const fetchSkills = async () => {
    try {
      const res = await api.get('/api/skills');
      setSkills(res.data);
    } catch (err) {
      console.error('Error fetching skills', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const openCreateDialog = () => {
    setEditingSkill(null);
    setName('');
    setCategory('frontend');
    setProficiencyLevel('');
    setErrors({});
    setIsDialogOpen(true);
  };

  const openEditDialog = (skill: Skill) => {
    setEditingSkill(skill);
    setName(skill.name);
    setCategory(skill.category);
    setProficiencyLevel(skill.proficiency_level);
    setErrors({});
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this skill?')) return;

    try {
      await api.delete(`/api/skills/${id}`);
      setSkills(skills.filter((s) => s.id !== id));
    } catch (err) {
      console.error('Error deleting skill', err);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSaving(true);

    const payload = {
      name,
      category,
      proficiency_level: proficiencyLevel,
    };

    try {
      if (editingSkill) {
        await api.put(`/api/skills/${editingSkill.id}`, payload);
      } else {
        await api.post('/api/skills', payload);
      }
      setIsDialogOpen(false);
      fetchSkills();
    } catch (err: any) {
      console.error('Error saving skill', err);
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-neutral-900">Manage Skills</h2>
          <p className="text-neutral-500 text-xs mt-1">Configure technical capabilities and categories.</p>
        </div>
        <Button
          onClick={openCreateDialog}
          className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-none text-xs font-semibold py-2.5 px-4 transition-colors cursor-pointer"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Skill
        </Button>
      </div>

      <Card className="border border-neutral-200/80 bg-white rounded-none shadow-none">
        <CardContent className="p-0">
          {loading ? (
            <div className="p-8 text-center flex items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-neutral-500" />
            </div>
          ) : skills.length === 0 ? (
            <div className="p-12 text-center text-sm text-neutral-500">
              No skills added yet. Click &quot;Add Skill&quot; to begin.
            </div>
          ) : (
            <ScrollArea className="w-full overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-neutral-200/80 hover:bg-transparent">
                    <TableHead className="font-semibold text-neutral-500 text-xs uppercase">Skill Name</TableHead>
                    <TableHead className="font-semibold text-neutral-500 text-xs uppercase">Category</TableHead>
                    <TableHead className="font-semibold text-neutral-500 text-xs uppercase">Proficiency Level</TableHead>
                    <TableHead className="font-semibold text-neutral-500 text-xs uppercase w-[120px] text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {skills.map((skill) => (
                    <TableRow key={skill.id} className="border-b border-neutral-200/50 hover:bg-neutral-50/50">
                      <TableCell className="font-semibold text-neutral-900 text-sm">{skill.name}</TableCell>
                      <TableCell>
                        <span className={`capitalize inline-flex items-center text-[10px] font-bold px-2 py-0.5 border ${
                          skill.category === 'frontend'
                            ? 'bg-neutral-50 text-neutral-800 border-neutral-200'
                            : skill.category === 'backend'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-150'
                            : 'bg-zinc-100 text-zinc-800 border-zinc-200'
                        }`}>
                          {skill.category}
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-neutral-600 font-medium">{skill.proficiency_level}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditDialog(skill)}
                            className="h-8 w-8 p-0 text-neutral-500 hover:text-neutral-900 rounded-none cursor-pointer"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(skill.id)}
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50/50 rounded-none cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          )}
        </CardContent>
      </Card>

      {/* Create/Edit Skill Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-none border border-neutral-200 bg-white">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold tracking-tight text-neutral-900">
              {editingSkill ? 'Edit Skill Details' : 'Create New Skill'}
            </DialogTitle>
            <DialogDescription className="text-neutral-500 text-xs">
              Configure the attributes of this developer skill set.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-4 py-2">
              <FormItem>
                <FormLabel>Skill Name</FormLabel>
                <Input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Next.js"
                  className="rounded-none border-neutral-300 text-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                />
                {errors.name && <FormMessage>{errors.name[0]}</FormMessage>}
              </FormItem>

              <FormItem>
                <FormLabel>Category</FormLabel>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full flex h-10 items-center justify-between border border-neutral-300 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-neutral-800"
                >
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="tools">Tools</option>
                </select>
                {errors.category && <FormMessage>{errors.category[0]}</FormMessage>}
              </FormItem>

              <FormItem>
                <FormLabel>Proficiency Level</FormLabel>
                <Input
                  required
                  value={proficiencyLevel}
                  onChange={(e) => setProficiencyLevel(e.target.value)}
                  placeholder="e.g. Advanced, Intermediate, Beginner"
                  className="rounded-none border-neutral-300 text-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                />
                {errors.proficiency_level && <FormMessage>{errors.proficiency_level[0]}</FormMessage>}
              </FormItem>
            </div>

            <DialogFooter className="mt-4 border-t border-neutral-100 pt-4 gap-2 sm:gap-0">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="rounded-none text-xs font-semibold hover:bg-neutral-50 cursor-pointer border-neutral-300 text-neutral-700"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={saving}
                className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-none text-xs font-semibold py-2.5 px-4 transition-colors cursor-pointer"
              >
                {saving ? 'Saving...' : 'Save Skill'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
