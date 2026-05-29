'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form';

export default function LoginPage() {
  const { user, login, isLoading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      router.push('/admin');
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await login({ email, password });
      router.push('/admin');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Invalid credentials. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading || user) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md border border-neutral-200/80 bg-white shadow-sm rounded-none">
        <CardHeader className="space-y-1.5 pb-6">
          <CardTitle className="text-xl font-bold tracking-tight text-neutral-900">Admin Login</CardTitle>
          <CardDescription className="text-neutral-500 text-xs">
            Authenticate to access the portfolio administration dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50/50 border border-red-200 text-red-600 text-xs px-3 py-2.5 font-medium">
                {error}
              </div>
            )}
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="rounded-none border-neutral-300 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 text-sm py-5"
              />
            </FormItem>
            <FormItem>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="rounded-none border-neutral-300 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 text-sm py-5"
              />
            </FormItem>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white rounded-none font-medium py-5 text-sm transition-colors cursor-pointer"
            >
              {isSubmitting ? 'Authenticating...' : 'Sign In'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
