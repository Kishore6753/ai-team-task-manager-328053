import type { Metadata } from "next";
import "./globals.css";
import React from "react";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "AI Team Task Manager",
  description: "AI-powered full-stack team task manager platform",
};

/**
 * AppShell provides the foundational application layout:
 * - Responsive sidebar (for main navigation)
 * - Top bar (for user/account controls)
 * - Main content area
 * - Modal render portal (for create/edit/AI modals)
 * 
 * StyleGuide: light theme, #3b82f6 primary, #06b6d4 accent, modern/flat
 * 
 * Usage: All pages/components flow through here
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="flex min-h-screen bg-[#f9fafb] text-[#111827]">
          {/* SIDEBAR */}
          <aside
            className="
              w-64 min-w-[16rem] bg-white border-r border-gray-200 
              hidden md:flex flex-col justify-between
              fixed h-full z-30
            "
            aria-label="Sidebar"
          >
            <div className="flex flex-col flex-1 py-5 gap-3">
              <div className="flex items-center gap-3 px-6 py-2">
                <span className="font-bold text-xl text-[#3b82f6] tracking-tight">
                  TeamTasks<span className="text-[#06b6d4]">AI</span>
                </span>
              </div>
              <nav className="flex-1 flex flex-col gap-1 px-2">
                {/* TODO: Add navigation links */}
                <a href="#" className="nav-link-active">
                  <span className="material-symbols-outlined align-middle mr-2">view_kanban</span>
                  Kanban Board
                </a>
                <a href="#" className="nav-link">
                  <span className="material-symbols-outlined align-middle mr-2">folder_open</span>
                  Projects
                </a>
                <a href="#" className="nav-link">
                  <span className="material-symbols-outlined align-middle mr-2">group</span>
                  Teams
                </a>
              </nav>
              <div className="border-t border-gray-100 mt-auto px-4 py-4">
                <small className="text-gray-400">&copy; {new Date().getFullYear()} TeamTasksAI</small>
              </div>
            </div>
          </aside>

          {/* MOBILE SIDEBAR backdrop/modal */}
          {/* TODO: Implement sidebar toggle for mobile */}

          {/* MAIN CONTENT WRAPPER */}
          <div className="flex flex-col flex-1 min-w-0 ml-0 md:ml-64">
            {/* TOP BAR */}
            <header className="sticky top-0 z-20 bg-white border-b border-gray-200 flex items-center min-h-16 px-4 sm:px-6">
              <div className="flex items-center gap-3 w-full">
                {/* Mobile sidebar button */}
                <button
                  className="md:hidden p-2 -ml-1 text-[#3b82f6] hover:bg-[#eff6ff] rounded"
                  aria-label="Open sidebar"
                  type="button"
                  // TODO: Implement sidebar open/close
                  disabled
                >
                  <span className="material-symbols-outlined">menu</span>
                </button>
                <h1 className="text-lg font-semibold flex-1">
                  Team Task Manager
                </h1>
                {/* User controls placeholder */}
                <div className="flex items-center gap-2">
                  {/* TODO: Replace with user avatar/control component */}
                  <button className="rounded-full bg-[#06b6d4]/10 text-[#06b6d4] px-3 py-1 font-medium hover:bg-[#06b6d4]/20 transition">
                    Login
                  </button>
                </div>
              </div>
            </header>
            <main className="flex-1 min-h-0 flex flex-col">
              <div className="flex-1 flex flex-col px-2 pt-6 pb-2 sm:px-8">
                {children}
              </div>
            </main>
          </div>

          {/* MODAL ROOT: Used by modals for portal rendering */}
          <div id="modal-root" />
        </div>
      </body>
    </html>
  );
}
