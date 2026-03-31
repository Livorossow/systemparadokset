import Image from "next/image";
import { episodes } from "@/lib/episodes";

const SPOTIFY_URL = "https://open.spotify.com/show/3eXecEG9wqFRVbFX7B9xuY";
const APPLE_URL =
  "https://podcasts.apple.com/us/podcast/systemparadokset-hvordan-sette-fart-der-treghet-regjerer/id1863701419";

const hosts = [
  {
    name: "André Mundal",
    linkedIn: "https://www.linkedin.com/in/andr%C3%A9-mundal/",
    email: "amundal@gmail.com",
  },
  {
    name: "Liv Oftedal Rossow",
    linkedIn: "https://www.linkedin.com/in/livrossow/",
    email: "livrossow@gmail.com",
  },
];

function GridTexture() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  );
}

function DiagonalLine() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="100%"
        x2="100%"
        y2="15%"
        stroke="#DAA960"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#252830] text-white font-sans">

      {/* ── Nav ───────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#252830]/90 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/logo.png"
              alt="Systemparadokset"
              width={180}
              height={60}
              className="h-7 w-auto"
            />
          </a>
          <a
            href="#om"
            className="text-sm text-white/50 hover:text-[#DAA960] transition-colors"
          >
            Om oss
          </a>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/5">
        <GridTexture />
        <DiagonalLine />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 sm:py-28">
          <Image
            src="/logo.png"
            alt="Systemparadokset – hvordan sette fart der treghet regjerer"
            width={420}
            height={140}
            priority
            className="-ml-2 mb-8"
          />
          <p className="text-white/50 text-sm mb-8">
            Med André Mundal og Liv Oftedal Rossow
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1DB954] text-black text-sm font-semibold hover:bg-[#1ed760] transition-colors"
            >
              <SpotifyIcon />
              Lytt på Spotify
            </a>
            <a
              href={APPLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-sm font-semibold hover:border-[#DAA960]/60 hover:text-[#DAA960] transition-colors"
            >
              <AppleIcon />
              Apple Podcasts
            </a>
          </div>
        </div>
      </section>

      {/* ── Episodes ──────────────────────────────────────────── */}
      <section className="relative border-b border-white/5">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-14">
          <h2 className="font-mono text-xs text-[#DAA960] uppercase tracking-widest mb-10">
            Episoder
          </h2>
          <ol className="space-y-0">
            {[...episodes].reverse().map((ep) => (
              <li
                key={ep.number}
                className="border-t border-white/5 py-8 group"
              >
                <p className="font-mono text-xs text-white/30 mb-2">
                  #{ep.number} &middot;{" "}
                  {new Date(ep.date).toLocaleDateString("no-NO", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  &middot; {ep.duration}
                </p>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#DAA960] transition-colors leading-snug">
                  {ep.title}
                </h3>
                {ep.tags && ep.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {ep.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full border border-[#DAA960]/25 text-[#DAA960]/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-sm text-white/45 leading-relaxed max-w-xl">
                  {ep.description}
                </p>
                {(ep.spotifyUrl || ep.appleUrl) && (
                  <div className="flex gap-4 mt-4">
                    {ep.spotifyUrl && (
                      <a
                        href={ep.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#DAA960]/50 hover:text-[#DAA960] transition-colors"
                      >
                        Spotify →
                      </a>
                    )}
                    {ep.appleUrl && (
                      <a
                        href={ep.appleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#DAA960]/50 hover:text-[#DAA960] transition-colors"
                      >
                        Apple →
                      </a>
                    )}
                  </div>
                )}
              </li>
            ))}
            <li className="border-t border-white/5" />
          </ol>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section id="om" className="relative border-b border-white/5">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-14">
          <h2 className="font-mono text-xs text-[#DAA960] uppercase tracking-widest mb-8">
            Om podcasten
          </h2>
          <p className="text-white/60 leading-relaxed max-w-xl mb-12 text-[15px]">
            Systemparadokset er en podcast om store organisasjoner, komplekse
            systemer og det evige spørsmålet: hvorfor er det så vanskelig å
            komme seg fremover? Vi snakker med folk som jobber i og med systemer
            som tilsynelatende styrer seg selv — og utforsker hva som faktisk
            skal til for å skape bevegelse der treghet regjerer.
          </p>

          <h3 className="font-mono text-xs text-[#DAA960] uppercase tracking-widest mb-6">
            Verter
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {hosts.map((host) => (
              <div
                key={host.name}
                className="rounded-lg border border-white/8 bg-white/[0.03] p-5 hover:border-[#DAA960]/30 transition-colors"
              >
                <p className="font-semibold text-white mb-3">{host.name}</p>
                <a
                  href={host.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#DAA960]/50 hover:text-[#DAA960] transition-colors"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="relative">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-14">
          <div className="flex flex-col sm:flex-row sm:items-start gap-10 sm:gap-16">

            <div>
              <p className="font-mono text-xs text-[#DAA960] uppercase tracking-widest mb-4">
                Lytt på
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href={SPOTIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#1DB954] transition-colors"
                >
                  <SpotifyIcon />
                  Spotify
                </a>
                <a
                  href={APPLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <AppleIcon />
                  Apple Podcasts
                </a>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs text-[#DAA960] uppercase tracking-widest mb-4">
                Kontakt
              </p>
              <div className="flex flex-col gap-2.5">
                {hosts.map((host) => (
                  <div key={host.name}>
                    <a
                      href={`mailto:${host.email}`}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {host.name} — {host.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-14 pt-8 border-t border-white/5">
            <p className="text-xs text-white/15 font-mono">
              © {new Date().getFullYear()} Systemparadokset
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
