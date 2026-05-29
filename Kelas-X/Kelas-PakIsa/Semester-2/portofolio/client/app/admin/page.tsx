'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { FolderGit, Code2, ArrowUpRight, ArrowRight } from 'lucide-react';

export default function AdminOverviewPage() {
  const [stats, setStats] = useState({ projects: 0, skills: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [projRes, skillRes] = await Promise.all([
          api.get('/api/projects'),
          api.get('/api/skills'),
        ]);
        setStats({
          projects: projRes.data.length,
          skills: skillRes.data.length,
        });
      } catch (err) {
        console.error('Failed to load dashboard stats', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2].map((i) => (
            <Card key={i} className="border border-neutral-200/80 bg-white rounded-none shadow-none animate-pulse">
              <div className="h-32"></div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-neutral-900">Welcome Back, Admin</h2>
        <p className="text-neutral-500 text-xs mt-1">Here is a quick overview of your portfolio content.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Projects Card */}
        <Card className="border border-neutral-200/80 bg-white rounded-none shadow-none hover:border-neutral-400 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Total Projects
            </CardTitle>
            <FolderGit className="h-5 w-5 text-neutral-400" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-extrabold text-neutral-900">{stats.projects}</div>
            <Link
              href="/admin/projects"
              className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              Manage Projects <ArrowRight className="h-3 w-3" />
            </Link>
          </CardContent>
        </Card>

        {/* Skills Card */}
        <Card className="border border-neutral-200/80 bg-white rounded-none shadow-none hover:border-neutral-400 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Skills Catalog
            </CardTitle>
            <Code2 className="h-5 w-5 text-neutral-400" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-extrabold text-neutral-900">{stats.skills}</div>
            <Link
              href="/admin/skills"
              className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              Manage Skills <ArrowRight className="h-3 w-3" />
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-neutral-200/80 bg-white rounded-none shadow-none p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-neutral-900">Need to update your portfolio details?</h3>
            <p className="text-xs text-neutral-500">You can view how your portfolio looks to visitors anytime.</p>
          </div>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 border border-neutral-200 hover:bg-neutral-50 text-neutral-800 text-xs font-semibold px-4 py-2.5 transition-all rounded-none cursor-pointer"
          >
            Visit Live Site <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Card>
    </div>
  );
}
