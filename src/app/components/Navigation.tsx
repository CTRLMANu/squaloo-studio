import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-6 bg-black/50 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <div className="text-white text-xl">S</div>
          </div>
          <span className="text-xl text-white">Squaloo Studios</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/hue-of-year" className="text-sm text-white/80 hover:text-white transition-colors">
            Hue of Year
          </Link>
          <Link to="/hue-of-year/support" className="text-sm text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-6 pb-6 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/hue-of-year"
              className="text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hue of Year
            </Link>
            <Link
              to="/hue-of-year/support"
              className="text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}