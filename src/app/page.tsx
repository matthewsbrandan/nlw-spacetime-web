export default function Home() {
  return (
    <div className="grid h-screen grid-cols-2 bg-zinc-950 p-6 text-zinc-400">
      <main className="flex flex-col items-center justify-center">
        <div className="animate-pulse">
          <h1 className="text-3xl font-semibold text-zinc-100">Hi Matth!</h1>
          <span>Never stop learning</span>
        </div>
      </main>
      <div className="rounded-lg bg-zinc-900/50" />
    </div>
  )
}
