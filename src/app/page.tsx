import Link from "next/link";

export default function Home() {
  return (
    <div className="relative grid grid-rows-[1fr_auto] min-h-screen p-8 bg-black text-white font-mono">
      {/* Border Lines */}
      <div className="absolute inset-0 p-8">
        {/* Main Border */}
        <div className="w-full h-full border border-white/5 relative">
          {/* Left Border Detail */}
          <div className="absolute -left-px top-0 bottom-0 border-l border-white/10" />
          
          {/* Top Border Detail */}
          <div className="absolute -top-px left-0 right-0 border-t border-white/10" />
          
          {/* Right Border Detail */}
          <div className="absolute -right-px top-0 bottom-0 border-r border-white/10" />
          
          {/* Bottom Border Detail */}
          <div className="absolute -bottom-px left-0 right-0 border-b border-white/10" />

          {/* Top Left Corner */}
          <div className="absolute top-0 left-0">
            <div className="relative w-40 h-40">
              <div className="absolute bg-white/10 h-px w-full top-0 left-0" />
              <div className="absolute bg-white/10 w-px h-full top-0 left-0" />
            </div>
          </div>

          {/* Top Right Corner - Cross/Plus Symbol */}
          <div className="absolute -top-px -right-px">
            <div className="relative w-40 h-40">
              <div className="absolute bg-white h-px w-40 top-0 right-0" />
              <div className="absolute bg-white w-px h-40 top-0 right-0" />
            </div>
          </div>

          {/* Bottom Right Corner */}
          <div className="absolute bottom-0 right-0">
            <div className="relative w-40 h-40">
              <div className="absolute bg-white/10 h-px w-full bottom-0 right-0" />
              <div className="absolute bg-white/10 w-px h-full bottom-0 right-0" />
            </div>
          </div>

          {/* Bottom Left Corner */}
          <div className="absolute bottom-0 left-0">
            <div className="relative w-40 h-40">
              <div className="absolute bg-white/10 h-px w-full bottom-0 left-0" />
              <div className="absolute bg-white/10 w-px h-full bottom-0 left-0" />
            </div>
          </div>
        </div>
      </div>

      <main className="relative flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Unlocking AI with Next.js
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Modern Web Development Redefined
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
          <Link 
            href="/generate-text" 
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:bg-white/5 transition-colors rounded-none group"
          >
            <span className="text-white/60 group-hover:text-white/90 transition-colors">→</span> Generate Text
          </Link>
          
          <Link 
            href="/generate-image" 
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:bg-white/5 transition-colors rounded-none group"
          >
            <span className="text-white/60 group-hover:text-white/90 transition-colors">→</span> Generate Image
          </Link>
          
          <Link 
            href="/generate-blabla" 
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:bg-white/5 transition-colors rounded-none group"
          >
            <span className="text-white/60 group-hover:text-white/90 transition-colors">→</span> Generate BlaBla
          </Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="relative flex justify-between items-center p-8 border-t border-white/10">
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
