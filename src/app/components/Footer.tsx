import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-6 md:px-8 py-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/70">
            © 2026 Squaloo Studios
          </div>
          <div className="flex items-center gap-6">
            <Link to="/hue-of-year/privacy" className="text-sm text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <a href="mailto:ossannam@icloud.com" className="text-sm text-white/70 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
