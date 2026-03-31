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
    <div className="min-h-screen bg-[#141518] text-white font-sans">

      {/* ── Nav ───────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-[#141518]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest uppercase">
            System<span className="text-[#DAA960]">PA</span>radokset
          </span>
          <a href="#om" className="text-sm text-white/40 hover:text-white transition-colors">
            Om oss
          </a>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-end gap-0">

          {/* Text */}
          <div className="pb-16 sm:pb-24 min-w-0">
            <p className="font-mono text-xs text-[#DAA960] tracking-widest uppercase mb-8">
              Podcast
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              System<span className="text-[#DAA960]">pa</span>radokset
            </h1>
            <p className="text-xl sm:text-2xl text-white/60 italic mb-12 max-w-lg leading-snug">
              — hvordan sette fart der treghet regjerer
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={SPOTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1DB954] text-black text-sm font-bold hover:bg-[#1ed760] transition-colors"
              >
                <SpotifyIcon />
                Lytt på Spotify
              </a>
              <a
                href={APPLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/20 text-sm font-semibold hover:border-white/50 hover:bg-white/5 transition-colors"
              >
                <AppleIcon />
                Apple Podcasts
              </a>
            </div>
          </div>

          {/* Host photo — hidden on mobile, shown on sm+ */}
          <div className="hidden sm:block pl-6 pb-0 self-end">
            <div className="relative w-52 lg:w-64 h-64 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/hosts.jpg"
                alt="André Mundal og Liv Oftedal Rossow"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Episodes ──────────────────────────────────────────── */}
      <section className="bg-[#1c1e24] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="font-mono text-xs text-[#DAA960] tracking-widest uppercase mb-12">
            Episoder
          </p>
          <ol className="space-y-0">
            {[...episodes].reverse().map((ep) => (
              <li key={ep.number} className="group border-t border-white/5 py-8 sm:py-10">
                <div className="flex gap-6 sm:gap-10 items-start">
                  <span className="font-black text-4xl sm:text-5xl text-[#DAA960]/20 leading-none tabular-nums w-12 shrink-0 group-hover:text-[#DAA960]/50 transition-colors">
                    {String(ep.number).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                      <span className="font-mono text-xs text-white/30">
                        {new Date(ep.date).toLocaleDateString("no-NO", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-white/15">·</span>
                      <span className="font-mono text-xs text-white/30">{ep.duration}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#DAA960] transition-colors">
                      {ep.title}
                    </h3>
                    {ep.tags && ep.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {ep.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs text-[#DAA960]/50 border border-[#DAA960]/20 px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-[15px] text-white/55 leading-relaxed max-w-xl">
                      {ep.description}
                    </p>
                    {(ep.spotifyUrl || ep.appleUrl) && (
                      <div className="flex gap-4 mt-4">
                        {ep.spotifyUrl && (
                          <a href={ep.spotifyUrl} target="_blank" rel="noopener noreferrer"
                            className="text-xs text-[#DAA960]/50 hover:text-[#DAA960] transition-colors">
                            Spotify →
                          </a>
                        )}
                        {ep.appleUrl && (
                          <a href={ep.appleUrl} target="_blank" rel="noopener noreferrer"
                            className="text-xs text-[#DAA960]/50 hover:text-[#DAA960] transition-colors">
                            Apple →
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
            <li className="border-t border-white/5" />
          </ol>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section id="om" className="max-w-4xl mx-auto px-6 py-20 sm:py-24">
        <div className="grid sm:grid-cols-2 gap-12 sm:gap-16">
          <div>
            <p className="font-mono text-xs text-[#DAA960] tracking-widest uppercase mb-6">
              Om podcasten
            </p>
            <p className="text-white/70 leading-relaxed text-[15px]">
              Systemparadokset er en podcast om store organisasjoner, komplekse
              systemer og det evige spørsmålet: hvorfor er det så vanskelig å
              komme seg fremover? Vi snakker med folk som jobber i og med
              systemer som tilsynelatende styrer seg selv — og utforsker hva
              som faktisk skal til for å skape bevegelse der treghet regjerer.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-[#DAA960] tracking-widest uppercase mb-6">
              Verter
            </p>
            <div className="space-y-4">
              {hosts.map((host) => (
                <div key={host.name} className="border border-white/8 rounded-lg p-5 hover:border-[#DAA960]/30 transition-colors">
                  <p className="font-semibold text-white mb-2">{host.name}</p>
                  <a
                    href={host.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-white/35 hover:text-[#DAA960] transition-colors"
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="bg-[#1c1e24] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 mb-12">
            <div>
              <p className="font-mono text-xs text-[#DAA960] tracking-widest uppercase mb-4">
                Lytt på
              </p>
              <div className="space-y-2.5">
                <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-[#1DB954] transition-colors">
                  <SpotifyIcon /> Spotify
                </a>
                <a href={APPLE_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                  <AppleIcon /> Apple Podcasts
                </a>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-[#DAA960] tracking-widest uppercase mb-4">
                Kontakt
              </p>
              <div className="space-y-2.5">
                {hosts.map((host) => (
                  <div key={host.name}>
                    <a href={`mailto:${host.email}`}
                      className="text-sm text-white/50 hover:text-white transition-colors">
                      {host.name} — {host.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="font-mono text-xs text-white/15 border-t border-white/5 pt-8">
            © {new Date().getFullYear()} Systemparadokset
          </p>
        </div>
      </footer>

    </div>
  );
}
