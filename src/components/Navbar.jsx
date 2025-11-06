import { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X, MessageSquare, BookOpen, Home } from 'lucide-react';

function NavLink({ label }) {
  return (
    <a
      href="#"
      className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4] shadow-lg" />
            <span className="text-white font-semibold tracking-tight text-lg">
              Athletic Market
            </span>
          </div>

          {/* Center: Search */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                type="text"
                placeholder="Search supplements, equipment, snacks..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <NavLink label="Shop" />
              <NavLink label="Content" />
              <NavLink label="Community" />
              <NavLink label="Dashboard" />
            </nav>

            <button
              className="relative inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5 text-white" />
              <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-cyan-400 text-black text-xs font-semibold flex items-center justify-center">
                2
              </span>
            </button>

            <button
              className="hidden md:inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
              aria-label="Account"
            >
              <User className="h-5 w-5 text-white" />
            </button>

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-center gap-3 px-1">
                <Home className="h-4 w-4 text-white/70" />
                <NavLink label="Shop" />
              </div>
              <div className="flex items-center gap-3 px-1">
                <BookOpen className="h-4 w-4 text-white/70" />
                <NavLink label="Content" />
              </div>
              <div className="flex items-center gap-3 px-1">
                <MessageSquare className="h-4 w-4 text-white/70" />
                <NavLink label="Community" />
              </div>
              <div className="flex items-center gap-3 px-1">
                <User className="h-4 w-4 text-white/70" />
                <NavLink label="Dashboard" />
              </div>
              <div className="pt-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
                  <input
                    type="text"
                    placeholder="Search store..."
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
