import { useState } from "react";
import { Menu, X, Search, Scissors } from "lucide-react";
 
// Sidebar menu links
const proLinks = [
  { label: "Set up my business", icon: "😊" },
  { label: "How to get started", icon: "❓" },
  { label: "Grow your business", icon: "📈" },
  { label: "Manage your business", icon: "📅" },
  { label: "Elevate client experience", icon: "✂️" },
];

const clientLinks = [
  { label: "Sign up to book", icon: "😊" },
  { label: "Home", icon: "🏠" },
  { label: "Search", icon: "🔍" },
  { label: "Get $50", icon: "🎁" },
];

const companyLinks = ["Blog", "Help Center", "Careers", "Privacy", "Terms of Service", "Sitemap"];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* ── Top Nav Bar ── */}
      <nav className="sticky top-0 z-50 bg-[#0e2a1e] h-16 flex items-center justify-between px-4 md:px-8 shadow-lg">
        {/* Left: Hamburger (mobile) + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-[#c8f250] hover:text-white transition-colors p-1"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
          <span className="font-['Playfair_Display'] text-[#c8f250] text-2xl font-black tracking-tight">
            HairHobby
          </span>
        </div>

        {/* Center: Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-[#a8d5b5] hover:text-white text-sm font-medium transition-colors font-['DM_Sans']">
            Discover
          </a>
          <a href="#" className="text-[#a8d5b5] hover:text-white text-sm font-medium transition-colors font-['DM_Sans']">
            For Pros
          </a>
          <a href="#" className="text-[#a8d5b5] hover:text-white text-sm font-medium transition-colors font-['DM_Sans']">
            Blog
          </a>
        </div>

        {/* Right: Auth buttons */}
        <div className="flex items-center gap-2">
          <button className="hidden sm:block border border-[#a8d5b5] text-[#a8d5b5] hover:border-white hover:text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors font-['DM_Sans']">
            Log In
          </button>
          <button className="bg-[#c8f250] text-[#0e2a1e] text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#b5df30] transition-colors font-['DM_Sans']">
            Sign Up
          </button>
        </div>
      </nav>

      {/* ── Sidebar Overlay (backdrop) ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar Drawer ── */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="font-['Playfair_Display'] text-[#0e2a1e] text-xl font-black">
            HairHobby
          </span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="px-5 py-4">
          {/* Log In button */}
          <button className="w-full bg-[#0e2a1e] text-white font-semibold py-3 rounded-xl mb-4 font-['DM_Sans'] hover:bg-[#1a4a32] transition-colors">
            Log In
          </button>

          {/* Referral banner */}
          <div className="flex items-center justify-between bg-[#f5fde8] rounded-xl px-4 py-3 mb-6 cursor-pointer hover:bg-[#eaf7d0] transition-colors">
            <span className="text-sm font-semibold text-[#0e2a1e] font-['DM_Sans']">
              🎁 $50 for you, $50 for a friend!
            </span>
            <span className="text-gray-400">›</span>
          </div>

          {/* For Professionals */}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 font-['DM_Sans']">
            For Professionals
          </p>
          <ul className="mb-6">
            {proLinks.map((link) => (
              <li key={link.label}>
                <a
                  href="#"
                  className="flex items-center gap-3 py-3 border-b border-gray-100 text-sm font-medium text-gray-800 hover:text-[#0e2a1e] font-['DM_Sans'] transition-colors"
                >
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* For Clients */}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 font-['DM_Sans']">
            For Clients
          </p>
          <ul className="mb-6">
            {clientLinks.map((link) => (
              <li key={link.label}>
                <a
                  href="#"
                  className="flex items-center gap-3 py-3 border-b border-gray-100 text-sm font-medium text-gray-800 hover:text-[#0e2a1e] font-['DM_Sans'] transition-colors"
                >
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* HairHobby company links */}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 font-['DM_Sans']">
            HairHobby
          </p>
          <ul className="mb-6">
            {companyLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block py-3 border-b border-gray-100 text-sm font-medium text-gray-800 hover:text-[#0e2a1e] font-['DM_Sans'] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Social */}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 font-['DM_Sans']">
            Follow us
          </p>
          <div className="flex gap-4">
            {["📘", "📷", "𝕏"].map((icon, i) => (
              <button
                key={i}
                className="w-10 h-10 bg-[#0e2a1e] text-white rounded-full flex items-center justify-center text-base hover:bg-[#1a4a32] transition-colors"
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
