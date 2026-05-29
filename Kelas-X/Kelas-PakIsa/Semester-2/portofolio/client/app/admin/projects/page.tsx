'use client';

import React, { useEffect, useState, useRef } from 'react';
import api from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Edit, Trash2, Globe, ImageIcon, Loader2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  tech_stack: string[];
  image_path: string | null;
  link_demo: string | null;
  link_repo: string | null;
  order: number;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Form states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [linkDemo, setLinkDemo] = useState('');
  const [linkRepo, setLinkRepo] = useState('');
  const [order, setOrder] = useState(0);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [saving, setSaving] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchProjects = async () => {
    try {
      const res = await api.get('/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error('Error fetching projects', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const openCreateDialog = () => {
    setEditingProject(null);
    setTitle('');
    setDescription('');
    setTechStack('');
    setLinkDemo('');
    setLinkRepo('');
    setOrder(0);
    setImageFile(null);
    setErrors({});
    setIsDialogOpen(true);
  };

  const openEditDialog = (project: Project) => {
    setEditingProject(project);
    setTitle(project.title);
    setDescription(project.description);
    setTechStack(project.tech_stack.join(', '));
    setLinkDemo(project.link_demo || '');
    setLinkRepo(project.link_repo || '');
    setOrder(project.order);
    setImageFile(null);
    setErrors({});
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      await api.delete(`/api/projects/${id}`);
      setProjects(projects.filter((p) => p.id !== id));
    } catch (err) {
      console.error('Error deleting project', err);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSaving(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    
    // Parse tech stack comma separated string
    const stackArray = techStack
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
    
    stackArray.forEach((tech, index) => {
      formData.append(`tech_stack[${index}]`, tech);
    });

    if (imageFile) {
      formData.append('image', imageFile);
    }

    if (linkDemo) formData.append('link_demo', linkDemo);
    if (linkRepo) formData.append('link_repo', linkRepo);
    formData.append('order', String(order));

    try {
      if (editingProject) {
        // Laravel requires POST with _method=PUT for multipart/form-data updates
        formData.append('_method', 'PUT');
        await api.post(`/api/projects/${editingProject.id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await api.post('/api/projects', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      setIsDialogOpen(false);
      fetchProjects();
    } catch (err: any) {
      console.error('Error saving project', err);
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
          <h2 className="text-xl font-bold tracking-tight text-neutral-900">Manage Projects</h2>
          <p className="text-neutral-500 text-xs mt-1">Create, update, or remove portfolio showcase items.</p>
        </div>
        <Button
          onClick={openCreateDialog}
          className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-none text-xs font-semibold py-2.5 px-4 transition-colors cursor-pointer"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>

      <Card className="border border-neutral-200/80 bg-white rounded-none shadow-none">
        <CardContent className="p-0">
          {loading ? (
            <div className="p-8 text-center flex items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-neutral-500" />
            </div>
          ) : projects.length === 0 ? (
            <div className="p-12 text-center text-sm text-neutral-500">
              No projects added yet. Click &quot;Add Project&quot; to begin.
            </div>
          ) : (
            <ScrollArea className="w-full overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-neutral-200/80 hover:bg-transparent">
                    <TableHead className="w-[80px] font-semibold text-neutral-500 text-xs uppercase">Preview</TableHead>
                    <TableHead className="font-semibold text-neutral-500 text-xs uppercase">Title</TableHead>
                    <TableHead className="font-semibold text-neutral-500 text-xs uppercase">Tech Stack</TableHead>
                    <TableHead className="font-semibold text-neutral-500 text-xs uppercase w-[100px]">Order</TableHead>
                    <TableHead className="font-semibold text-neutral-500 text-xs uppercase w-[120px] text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id} className="border-b border-neutral-200/50 hover:bg-neutral-50/50">
                      <TableCell>
                        <Avatar className="h-10 w-10 rounded-none border border-neutral-200/80 bg-neutral-50">
                          {project.image_path ? (
                            <AvatarImage
                              src={`http://localhost:8000/storage/${project.image_path}`}
                              alt={project.title}
                              className="object-cover"
                            />
                          ) : (
                            <AvatarFallback className="rounded-none bg-neutral-100">
                              <ImageIcon className="h-4 w-4 text-neutral-400" />
                            </AvatarFallback>
                          )}
                        </Avatar>
                      </TableCell>
                      <TableCell>
                        <div className="font-semibold text-neutral-900 text-sm">{project.title}</div>
                        <div className="text-neutral-400 text-xs truncate max-w-[250px]">{project.description}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {project.tech_stack.map((tech) => (
                            <span
                              key={tech}
                              className="bg-neutral-100 text-neutral-700 text-[10px] font-semibold px-2 py-0.5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm font-medium text-neutral-600">{project.order}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditDialog(project)}
                            className="h-8 w-8 p-0 text-neutral-500 hover:text-neutral-900 rounded-none cursor-pointer"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(project.id)}
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

      {/* Create/Edit Project Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] rounded-none border border-neutral-200 bg-white">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold tracking-tight text-neutral-900">
              {editingProject ? 'Edit Project Details' : 'Create New Project'}
            </DialogTitle>
            <DialogDescription className="text-neutral-500 text-xs">
              Fill in the project details below. Images will be saved publicly.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4">
            <ScrollArea className="max-h-[60vh] pr-2">
              <div className="space-y-4 py-2">
                <FormItem>
                  <FormLabel>Project Title</FormLabel>
                  <Input
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Developer Workspace Dashboard"
                    className="rounded-none border-neutral-300 text-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                  />
                  {errors.title && <FormMessage>{errors.title[0]}</FormMessage>}
                </FormItem>

                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide a brief overview of the project features, architecture, and constraints..."
                    rows={4}
                    className="rounded-none border-neutral-300 text-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500 min-h-[100px]"
                  />
                  {errors.description && <FormMessage>{errors.description[0]}</FormMessage>}
                </FormItem>

                <FormItem>
                  <FormLabel>Tech Stack (Comma Separated)</FormLabel>
                  <Input
                    required
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    placeholder="e.g. Next.js, React, Tailwind, Laravel"
                    className="rounded-none border-neutral-300 text-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                  />
                  {errors.tech_stack && <FormMessage>{errors.tech_stack[0]}</FormMessage>}
                </FormItem>

                <div className="grid grid-cols-2 gap-4">
                  <FormItem>
                    <FormLabel>Demo URL</FormLabel>
                    <Input
                      type="url"
                      value={linkDemo}
                      onChange={(e) => setLinkDemo(e.target.value)}
                      placeholder="https://demo.com"
                      className="rounded-none border-neutral-300 text-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                    />
                    {errors.link_demo && <FormMessage>{errors.link_demo[0]}</FormMessage>}
                  </FormItem>

                  <FormItem>
                    <FormLabel>Repository URL</FormLabel>
                    <Input
                      type="url"
                      value={linkRepo}
                      onChange={(e) => setLinkRepo(e.target.value)}
                      placeholder="https://github.com/user/repo"
                      className="rounded-none border-neutral-300 text-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                    />
                    {errors.link_repo && <FormMessage>{errors.link_repo[0]}</FormMessage>}
                  </FormItem>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormItem>
                    <FormLabel>Display Order</FormLabel>
                    <Input
                      type="number"
                      value={order}
                      onChange={(e) => setOrder(parseInt(e.target.value) || 0)}
                      placeholder="0"
                      className="rounded-none border-neutral-300 text-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                    />
                    {errors.order && <FormMessage>{errors.order[0]}</FormMessage>}
                  </FormItem>

                  <FormItem>
                    <FormLabel>Project Cover Image</FormLabel>
                    <Input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                      className="rounded-none border-neutral-300 text-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500 cursor-pointer py-1.5"
                    />
                    {errors.image && <FormMessage>{errors.image[0]}</FormMessage>}
                  </FormItem>
                </div>
              </div>
            </ScrollArea>

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
                {saving ? 'Saving...' : 'Save Project'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
