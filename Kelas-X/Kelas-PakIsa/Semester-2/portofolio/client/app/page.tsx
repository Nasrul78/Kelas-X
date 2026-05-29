'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Code2, FolderGit, Globe, Mail, Send, ExternalLink, ShieldCheck, ArrowRight, Loader2, Award } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

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

interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  proficiency_level: string;
}

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactSending, setContactSending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projRes, skillRes] = await Promise.all([
          api.get('/api/projects'),
          api.get('/api/skills'),
        ]);
        setProjects(projRes.data);
        setSkills(skillRes.data);
      } catch (err) {
        console.error('Error fetching portfolio data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSending(true);
    // Simulate API request
    setTimeout(() => {
      setContactSending(false);
      setContactSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setContactSuccess(false), 5000);
    }, 1200);
  };

  const skillsByCategory = {
    frontend: skills.filter((s) => s.category === 'frontend'),
    backend: skills.filter((s) => s.category === 'backend'),
    tools: skills.filter((s) => s.category === 'tools'),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-neutral-200/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold tracking-tight uppercase text-neutral-900 text-sm">
            Developer Workspace
          </Link>
          
          <nav className="flex items-center gap-6">
            <a href="#projects" className="text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors uppercase tracking-wider">
              Projects
            </a>
            <a href="#skills" className="text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors uppercase tracking-wider">
              Skills
            </a>
            <a href="#contact" className="text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors uppercase tracking-wider">
              Contact
            </a>
            <Link
              href="/admin"
              className="text-xs font-semibold text-neutral-400 hover:text-emerald-600 transition-colors uppercase tracking-wider border border-dashed border-neutral-200 hover:border-emerald-200 px-2.5 py-1"
            >
              Portal
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col justify-center border-b border-neutral-200/80">
          <div className="max-w-2xl space-y-6 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50/50 border border-emerald-200/60 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for full stack opportunities
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] font-sans">
              Crafting premium backends and minimalist interfaces.
            </h1>
            <p className="text-neutral-600 text-base md:text-lg font-medium leading-relaxed">
              Hi, I am a Full Stack Developer. I build robust server configurations, scalable database models, and extremely polished user interfaces using Laravel and Next.js.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#projects"
                className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs py-3 px-5 tracking-wide uppercase transition-colors rounded-none cursor-pointer flex items-center gap-2"
              >
                View Showcase <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#contact"
                className="border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-semibold text-xs py-3 px-5 tracking-wide uppercase transition-all rounded-none cursor-pointer"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-b border-neutral-200/80">
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400">01 / Showcase</h2>
              <p className="text-xl font-extrabold text-neutral-900 tracking-tight">Recent Projects</p>
            </div>

            {loading ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="rounded-none border border-neutral-200/80 bg-white shadow-none animate-pulse">
                    <div className="h-48 bg-neutral-100" />
                    <div className="p-5 space-y-3">
                      <div className="h-4 bg-neutral-200 w-2/3" />
                      <div className="h-12 bg-neutral-100" />
                    </div>
                  </Card>
                ))}
              </div>
            ) : projects.length === 0 ? (
              <div className="text-center py-12 text-sm text-neutral-500 border border-neutral-200 border-dashed">
                No showcase projects available at this moment.
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <Card key={project.id} className="rounded-none border border-neutral-200 bg-white shadow-sm hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between group">
                    <div>
                      {project.image_path ? (
                        <div className="relative aspect-video w-full overflow-hidden border-b border-neutral-150 bg-neutral-50">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`http://localhost:8000/storage/${project.image_path}`}
                            alt={project.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video w-full border-b border-neutral-150 bg-neutral-50 flex items-center justify-center text-neutral-300">
                          <FolderGit className="h-8 w-8 stroke-[1.5]" />
                        </div>
                      )}
                      <CardHeader className="p-5 pb-2">
                        <CardTitle className="text-sm font-bold text-neutral-900 leading-tight">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-neutral-500 text-xs mt-1.5 leading-relaxed font-medium line-clamp-3">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                    </div>
                    
                    <CardContent className="p-5 pt-0 space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tech_stack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-neutral-100 text-neutral-600 text-[9px] font-bold px-2 py-0.5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-3 pt-2 border-t border-neutral-100 text-xs font-semibold">
                        {project.link_demo && (
                          <a
                            href={project.link_demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700"
                          >
                            Demo <Globe className="h-3 w-3" />
                          </a>
                        )}
                        {project.link_repo && (
                          <a
                            href={project.link_repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-neutral-600 hover:text-neutral-900"
                          >
                            Repository <Github className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-b border-neutral-200/80">
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400">02 / Technical Skills</h2>
              <p className="text-xl font-extrabold text-neutral-900 tracking-tight">Capabilities Catalog</p>
            </div>

            {loading ? (
              <div className="grid gap-6 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-48 bg-neutral-100 animate-pulse border border-neutral-200/80" />
                ))}
              </div>
            ) : skills.length === 0 ? (
              <div className="text-center py-8 text-sm text-neutral-500">
                Skills directory currently empty.
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-3">
                {/* Frontend Category */}
                <div className="space-y-4">
                  <div className="h-8 flex items-center border-b border-neutral-200 pb-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-neutral-900" /> Frontend
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {skillsByCategory.frontend.map((skill) => (
                      <div key={skill.id} className="flex items-center justify-between p-3 bg-white border border-neutral-200/80 shadow-xs">
                        <span className="text-sm font-semibold text-neutral-900">{skill.name}</span>
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                          {skill.proficiency_level}
                        </span>
                      </div>
                    ))}
                    {skillsByCategory.frontend.length === 0 && (
                      <p className="text-xs text-neutral-400 italic">No frontend skills listed.</p>
                    )}
                  </div>
                </div>

                {/* Backend Category */}
                <div className="space-y-4">
                  <div className="h-8 flex items-center border-b border-neutral-200 pb-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-emerald-600" /> Backend
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {skillsByCategory.backend.map((skill) => (
                      <div key={skill.id} className="flex items-center justify-between p-3 bg-white border border-neutral-200/80 shadow-xs">
                        <span className="text-sm font-semibold text-neutral-900">{skill.name}</span>
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                          {skill.proficiency_level}
                        </span>
                      </div>
                    ))}
                    {skillsByCategory.backend.length === 0 && (
                      <p className="text-xs text-neutral-400 italic">No backend skills listed.</p>
                    )}
                  </div>
                </div>

                {/* Tools/Other Category */}
                <div className="space-y-4">
                  <div className="h-8 flex items-center border-b border-neutral-200 pb-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-neutral-400" /> Tools & Platforms
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {skillsByCategory.tools.map((skill) => (
                      <div key={skill.id} className="flex items-center justify-between p-3 bg-white border border-neutral-200/80 shadow-xs">
                        <span className="text-sm font-semibold text-neutral-900">{skill.name}</span>
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                          {skill.proficiency_level}
                        </span>
                      </div>
                    ))}
                    {skillsByCategory.tools.length === 0 && (
                      <p className="text-xs text-neutral-400 italic">No developer tools listed.</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400">03 / Conversation</h2>
                <p className="text-xl font-extrabold text-neutral-900 tracking-tight">Let&apos;s Build Together</p>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                Have an idea, project parameters, or full-time position? Reach out directly using the form, or email me directly. Let&apos;s talk about backend performance and clean layouts.
              </p>
              <div className="flex items-center gap-3 text-neutral-700 text-sm font-semibold">
                <Mail className="h-4.5 w-4.5 text-neutral-400" />
                <span>hello@example.com</span>
              </div>
            </div>

            <Card className="rounded-none border border-neutral-200 bg-white shadow-sm p-6">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                {contactSuccess && (
                  <div className="bg-emerald-50/50 border border-emerald-250 text-emerald-700 text-xs px-3 py-2.5 font-medium flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" /> Message sent successfully! I will reply shortly.
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <Input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="rounded-none border-neutral-300 text-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500 py-4.5"
                    />
                  </FormItem>
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="rounded-none border-neutral-300 text-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500 py-4.5"
                    />
                  </FormItem>
                </div>
                <FormItem>
                  <FormLabel>Message Body</FormLabel>
                  <Textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, timeline, or request details..."
                    rows={4}
                    className="rounded-none border-neutral-300 text-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500 min-h-[90px]"
                  />
                </FormItem>
                <Button
                  type="submit"
                  disabled={contactSending}
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white rounded-none font-semibold text-xs py-5 transition-colors cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  {contactSending ? 'Submitting...' : (
                    <>
                      Send Message <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-neutral-400">
          <span>&copy; {new Date().getFullYear()} Portfolio Workspace. All Rights Reserved.</span>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-neutral-600 transition-colors">GitHub</a>
            <span>&bull;</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-neutral-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
