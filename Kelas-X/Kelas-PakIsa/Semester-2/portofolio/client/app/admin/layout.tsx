"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Button } from "@/components/ui/button";
import { Code2, FolderGit, Home, LogOut, PanelLeftClose } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const navItems = [
    { name: "Overview", href: "/admin", icon: Home },
    { name: "Projects", href: "/admin/projects", icon: FolderGit },
    { name: "Skills", href: "/admin/skills", icon: Code2 },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex bg-[#fbfbfb] text-neutral-900">
        {/* Sidebar */}
        <aside className="w-64 border-r border-neutral-200/80 bg-white flex-col justify-between hidden md:flex sticky top-0 h-screen">
          <div className="flex flex-col">
            <div className="h-16 px-6 border-b border-neutral-200/80 flex items-center gap-2">
              <span className="font-bold text-base tracking-tight uppercase">
                Portfolio Admin
              </span>
            </div>

            <nav className="p-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors rounded-none ${
                      isActive
                        ? "bg-neutral-100 text-neutral-950 border-l-2 border-emerald-600 pl-2.5"
                        : "text-neutral-500 hover:text-neutral-950 hover:bg-neutral-50"
                    }`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="p-4 border-t border-neutral-200/80 flex flex-col gap-2">
            <div className="px-3 py-2">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Signed In As
              </p>
              <p className="text-sm font-medium text-neutral-800 truncate">
                {user?.name}
              </p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-950 hover:bg-neutral-50"
            >
              View Public Site
            </Link>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full flex items-center justify-start gap-3 px-3 py-2.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50/50 rounded-none cursor-pointer font-medium"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </aside>

        {/* Main Workspace */}
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 border-b border-neutral-200/80 bg-white flex items-center justify-between px-6 md:px-8 sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <h1 className="font-semibold text-neutral-900 capitalize">
                {pathname === "/admin"
                  ? "Dashboard Overview"
                  : pathname.split("/").pop()}
              </h1>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-xs font-medium px-2.5 py-1.5 transition-colors ${
                      isActive
                        ? "bg-neutral-100 text-neutral-950 font-semibold"
                        : "text-neutral-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-neutral-500 hover:text-red-600 p-1 cursor-pointer"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </header>

          <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
