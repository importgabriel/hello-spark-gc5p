export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-4">
      <div className="text-center space-y-6">
        {/* Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
          Welcome
        </span>

        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Hello{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            World
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-md mx-auto text-lg text-slate-500 dark:text-slate-400">
          A clean, modern Next.js app — no backend required.
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="h-px w-12 bg-slate-300 dark:bg-slate-600 rounded-full" />
          <span className="h-2 w-2 rounded-full bg-indigo-400" />
          <span className="h-px w-12 bg-slate-300 dark:bg-slate-600 rounded-full" />
        </div>

        {/* Footer note */}
        <p className="text-sm text-slate-400 dark:text-slate-500">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </main>
  );
}
