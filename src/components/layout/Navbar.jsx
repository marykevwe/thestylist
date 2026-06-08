import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu, X, Smile, HelpCircle, TrendingUp, CalendarDays, Sparkles,
  UserPlus, Home, Search, Gift, BookOpen, LifeBuoy, Briefcase,
  ShieldCheck, FileText, Map,
} from "lucide-react";

const proLinks = [
  { label: "Set up my business", icon: Smile, to: "/for-pros" },
  { label: "How to get started", icon: HelpCircle, to: "/for-pros" },
  { label: "Grow your business", icon: TrendingUp, to: "/for-pros" },
  { label: "Manage your business", icon: CalendarDays, to: "/pro" },
  { label: "Elevate client experience", icon: Sparkles, to: "/pro/clients" },
];

const clientLinks = [
  { label: "Sign up to book", icon: UserPlus, to: "/register" },
  { label: "Home", icon: Home, to: "/" },
  { label: "Search", icon: Search, to: "/professionals" },
  { label: "Get $50", icon: Gift, to: "/" },
];

const companyLinks = [
  { label: "Blog", icon: BookOpen, to: "/" },
  { label: "Help Center", icon: LifeBuoy, to: "/" },
  { label: "Careers", icon: Briefcase, to: "/" },
  { label: "Privacy", icon: ShieldCheck, to: "/" },
  { label: "Terms of Service", icon: FileText, to: "/" },
  { label: "Sitemap", icon: Map, to: "/" },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const close = () => setSidebarOpen(false);

  return (
    <>
      {/* ── Top Nav Bar ── */}
      <nav className="sticky top-0 z-50 bg-brand-700 h-16 flex items-center justify-between px-4 md:px-8 shadow-lg">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-[#c8f250] hover:text-white transition-colors p-1"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
          <Link
            to="/"
            className="font-['Playfair_Display'] text-[#c8f250] text-2xl font-black tracking-tight"
          >
            HairHobby
          </Link>
        </div>

        {/* Center: Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/professionals" className="text-brand-200 hover:text-white text-sm font-medium transition-colors font-['DM_Sans']">
            Discover
          </Link>
          <Link to="/for-pros" className="text-brand-200 hover:text-white text-sm font-medium transition-colors font-['DM_Sans']">
            For Pros
          </Link>
          <Link to="/" className="text-brand-200 hover:text-white text-sm font-medium transition-colors font-['DM_Sans']">
            Blog
          </Link>
        </div>

        {/* Right: Login only */}
        <div className="flex items-center gap-2">
          <Link
            to="/register"
            className="hidden sm:block border border-brand-300 text-brand-200 hover:border-white hover:text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors font-['DM_Sans']"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-[#c8f250] text-[#0e2a1e] text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#b5df30] transition-colors font-['DM_Sans']"
          >
            Log In
          </Link>
        </div>
      </nav>

      {/* ── Backdrop ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={close}
        />
      )}

      {/* ── Sidebar Drawer ── */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-brand-900 border-b border-brand-800">
          <Link
            to="/"
            onClick={close}
            className="font-['Playfair_Display'] text-[#c8f250] text-xl font-black"
          >
            HairHobby
          </Link>
          <button
            onClick={close}
            className="text-brand-300 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="px-5 py-4">
          {/* Auth buttons */}
          <div className="flex gap-2 mb-4">
            <Link
              to="/login"
              onClick={close}
              className="flex-1 bg-brand-700 text-white text-center text-sm font-semibold py-3 rounded-xl font-['DM_Sans'] hover:bg-brand-800 transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/register"
              onClick={close}
              className="flex-1 border border-brand-200 text-brand-700 text-center text-sm font-semibold py-3 rounded-xl font-['DM_Sans'] hover:bg-brand-50 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Referral banner */}
          <Link
            to="/register"
            onClick={close}
            className="flex items-center justify-between bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 mb-6 hover:bg-brand-100 transition-colors"
          >
            <span className="text-sm font-semibold text-brand-900 font-['DM_Sans']">
              🎁 $50 for you, $50 for a friend!
            </span>
            <span className="text-brand-400">›</span>
          </Link>

          {/* Sections */}
          <SidebarSection title="For Professionals" links={proLinks} onNav={close} />
          <SidebarSection title="For Clients" links={clientLinks} onNav={close} />
          <SidebarSection title="HairHobby" links={companyLinks} onNav={close} />

          {/* Social */}
          <p className="text-xs font-bold text-brand-300 uppercase tracking-widest mb-3 font-['DM_Sans']">
            Follow us
          </p>
          <div className="flex gap-3">
            {[
              { icon: "📘", label: "Facebook" },
              { icon: "📷", label: "Instagram" },
              { icon: "𝕏", label: "X" },
            ].map(({ icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-10 h-10 bg-brand-700 text-white rounded-full flex items-center justify-center text-base hover:bg-brand-900 transition-colors"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

function SidebarSection({ title, links, onNav }) {
  return (
    <>
      <p className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-3 font-['DM_Sans']">
        {title}
      </p>
      <ul className="mb-6">
        {links.map(({ label, icon: Icon, to }) => (
          <li key={label}>
            <Link
              to={to}
              onClick={onNav}
              className="flex items-center gap-3 py-3 border-b border-brand-50 text-sm font-medium text-brand-900 hover:text-brand-700 font-['DM_Sans'] transition-colors group"
            >
              <Icon size={16} className="text-brand-500 group-hover:text-brand-700 shrink-0 transition-colors" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}