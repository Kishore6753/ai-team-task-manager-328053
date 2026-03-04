/**
 * Home page for the AI Team Task Manager.
 * Placeholder for Kanban/project overview;
 * instructs user about app flow and coming backend features.
 */
export default function Home() {
  return (
    <section
      className="flex flex-col gap-8 justify-center items-center min-h-[60vh] w-full"
      aria-label="Welcome to TeamTasksAI"
    >
      <div className="flex flex-col items-center gap-2 max-w-lg mx-auto">
        <span className="material-symbols-outlined text-[#3b82f6] text-6xl mb-2">
          dashboard_customize
        </span>
        <h2 className="font-semibold text-3xl text-[#111827] text-center">
          Welcome to TeamTasks<span className="text-[#06b6d4]">AI</span>
        </h2>
        <p className="text-[#64748b] text-lg text-center">
          A modern, AI-powered task manager for teams. Manage your projects, tasks, and daily work with real-time collaboration and AI enhancements.<br/>
          <span className="font-medium text-[#3b82f6]">
            (Backend API and AI features integration coming next.)
          </span>
        </p>
      </div>
    </section>
  );
}
