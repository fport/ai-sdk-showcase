import Link from "next/link";

export default function Home() {
  return (
    <div className="relative grid grid-rows-[1fr_auto] min-h-screen p-8 bg-black text-white font-mono">
      {/* Border Lines */}
      <div className="absolute inset-0 p-8">
        {/* Main Container */}
        <div className="w-full h-full border border-white/10 relative">
          {/* Corner Decorations */}
          {/* Top Left */}
          <div className="absolute -top-1 -left-1 w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-px bg-white" />
            <div className="absolute top-0 left-0 w-px h-full bg-white" />
          </div>
          
          {/* Top Right */}
          <div className="absolute -top-1 -right-1 w-16 h-16">
            <div className="absolute top-0 right-0 w-full h-px bg-white" />
            <div className="absolute top-0 right-0 w-px h-full bg-white" />
          </div>
          
          {/* Bottom Left */}
          <div className="absolute -bottom-1 -left-1 w-16 h-16">
            <div className="absolute bottom-0 left-0 w-full h-px bg-white" />
            <div className="absolute bottom-0 left-0 w-px h-full bg-white" />
          </div>
          
          {/* Bottom Right */}
          <div className="absolute -bottom-1 -right-1 w-16 h-16">
            <div className="absolute bottom-0 right-0 w-full h-px bg-white" />
            <div className="absolute bottom-0 right-0 w-px h-full bg-white" />
          </div>

          {/* Secondary Corner Details */}
          {/* Top Left Inner */}
          <div className="absolute top-4 left-4 w-8 h-8">
            <div className="absolute top-0 left-0 w-full h-px bg-white/20" />
            <div className="absolute top-0 left-0 w-px h-full bg-white/20" />
          </div>
          
          {/* Top Right Inner */}
          <div className="absolute top-4 right-4 w-8 h-8">
            <div className="absolute top-0 right-0 w-full h-px bg-white/20" />
            <div className="absolute top-0 right-0 w-px h-full bg-white/20" />
          </div>
          
          {/* Bottom Left Inner */}
          <div className="absolute bottom-4 left-4 w-8 h-8">
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/20" />
            <div className="absolute bottom-0 left-0 w-px h-full bg-white/20" />
          </div>
          
          {/* Bottom Right Inner */}
          <div className="absolute bottom-4 right-4 w-8 h-8">
            <div className="absolute bottom-0 right-0 w-full h-px bg-white/20" />
            <div className="absolute bottom-0 right-0 w-px h-full bg-white/20" />
          </div>

          {/* Center Border Lines */}
          <div className="absolute inset-8 border border-white/5" />
        </div>
      </div>

      <main className="relative flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Unlocking AI with Next.js
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Modern Web Development Redefined
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
          <Link 
            href="/case/generate-text" 
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:bg-white/5 transition-all duration-300 group relative"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-white/60 group-hover:text-white/90 transition-colors">→</span> Example Case's
          </Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="relative flex justify-between items-center p-10 border-t border-white/10 ">
        <span className="text-white/80">Furkan Portakal</span>
        <Link 
          href="https://github.com/fport" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 transition-colors group"
        >
          <span className="text-white/60 group-hover:text-white/90 transition-colors">→</span> GitHub
        </Link>
      </footer>
    </div>
  );
}
