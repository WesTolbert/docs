import { Search } from "lucide-react"

import { ThemeShowcase } from "@/components/ui/theme-showcase"

const books = [
  {
    title: "The Last Signal",
    author: "Aria Quinn",
    genre: "Sci-Fi",
    theme: "Space",
    rating: 4.9,
    cover: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 55%, #1f2937 100%)",
    blurb: "A lone archivist decodes a buried transmission that could rewrite humanity's future.",
  },
  {
    title: "Glass Tides",
    author: "Noah Vale",
    genre: "Fantasy",
    theme: "Adventure",
    rating: 4.8,
    cover: "linear-gradient(135deg, #14b8a6 0%, #0f766e 40%, #0f172a 100%)",
    blurb: "A hidden sea of living glass reveals a prophecy older than the city itself.",
  },
  {
    title: "Paper Horizon",
    author: "Lena Frost",
    genre: "Memoir",
    theme: "Travel",
    rating: 4.7,
    cover: "linear-gradient(135deg, #f59e0b 0%, #d97706 40%, #7c2d12 100%)",
    blurb: "A reflective journey across borders, memory, and the architecture of belonging.",
  },
  {
    title: "Moonlit Circuit",
    author: "Iris Holt",
    genre: "Thriller",
    theme: "Mystery",
    rating: 4.9,
    cover: "linear-gradient(135deg, #fb7185 0%, #be185d 35%, #312e81 100%)",
    blurb: "A crackling neural network and a missing prototype pull a city into a rogue signal storm.",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/60 p-4 shadow-soft backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-sky-500 font-bold text-white">
              A
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Reading portal</p>
              <h1 className="text-2xl font-semibold tracking-tight">A MIND OF VALOR</h1>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-2 text-sm text-muted-foreground shadow-sm">
              <Search className="h-4 w-4" />
              <input
                aria-label="Search books"
                placeholder="Search by title, author, genre, or theme"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground sm:w-80"
              />
            </label>
          </div>
        </header>

        <section className="mt-8 grid gap-6 rounded-3xl border border-border/60 bg-card/50 p-6 shadow-soft md:grid-cols-[1.5fr_0.8fr] md:items-center">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">Curated for brave readers</p>
            <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Find your next story worth carrying.
            </h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Discover bold fiction, thoughtful memoirs, epic fantasy, and unforgettable reads selected with courage, curiosity, and character in mind.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
            {[
              ["24", "featured titles"],
              ["8", "genres"],
              ["4.8", "average rating"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-border/60 bg-background/70 p-4 text-center">
                <div className="text-3xl font-semibold text-foreground">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-border/60 bg-card/50 p-4 shadow-soft">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">Highlights</span>
            {['All', 'Fantasy', 'Sci-Fi', 'Memoir', 'Classics'].map((chip, index) => (
              <button
                key={chip}
                type="button"
                className={`rounded-full border px-3 py-1.5 text-sm transition ${
                  index === 0
                    ? 'border-violet-400 bg-violet-500/15 text-violet-100'
                    : 'border-border/60 bg-background/60 text-foreground hover:border-violet-400/60'
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </section>

        <ThemeShowcase />

        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)]">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">Discover</p>
              <span className="rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-xs text-muted-foreground">
                {books.length} books discovered
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {books.map((book) => (
                <article key={book.title} className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft">
                  <div className="h-28" style={{ background: book.cover }} />
                  <div className="space-y-3 p-4">
                    <div className="flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      <span>{book.genre}</span>
                      <span>★ {book.rating.toFixed(1)}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{book.title}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{book.author}</span>
                      <span>{book.theme}</span>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">{book.blurb}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-medium text-amber-300">★ {book.rating.toFixed(1)}</span>
                      <div className="flex gap-2 text-sm text-primary">
                        <a href="#" className="hover:underline">Amazon</a>
                        <a href="#" className="hover:underline">Audible</a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
