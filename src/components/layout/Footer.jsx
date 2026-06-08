// layout/Footer.jsx
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const footerLinks = {
  "For Professionals": [
    { label: "Set up my business", to: "/for-pros" },
    { label: "How to get started", to: "/for-pros" },
    { label: "Grow your business", to: "/for-pros" },
    { label: "Manage your business", to: "/pro" },
    { label: "Elevate client experience", to: "/pro/clients" },
  ],
  "For Clients": [
    { label: "Sign up to book", to: "/register" },
    { label: "Search", to: "/professionals" },
    { label: "Get $50", to: "/register" },
    { label: "Help Center", to: "/" },
  ],
  "HairHobby": [
    { label: "Blog", to: "/" },
    { label: "Help Center", to: "/" },
    { label: "Careers", to: "/" },
    { label: "Terms of Service for Pros", to: "/" },
    { label: "Privacy", to: "/" },
    { label: "Sitemap", to: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-200 font-dmsans">
      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <Link
            to="/"
            className="font-playfair text-[#c8f250] text-2xl font-black mb-3 block"
          >
            HairHobby
          </Link>
          <p className="text-sm leading-relaxed text-brand-300 max-w-[200px]">
            Bringing hair professionals and clients together, one booking at a time.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-5">
            {[
              { label: "Facebook", Icon: Facebook },
              { label: "Instagram", Icon: Instagram },
              { label: "X / Twitter", Icon: Twitter },
            ].map(({ label, Icon }) => (
              <button
                key={label}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-brand-800 hover:bg-brand-700 flex items-center justify-center transition-colors"
              >
                <Icon size={15} className="text-brand-200" />
              </button>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <p className="text-white font-semibold text-sm mb-4">{heading}</p>
            <ul className="space-y-3">
              {links.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-brand-300 hover:text-[#c8f250] text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-800 py-5 px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-brand-500">
          © {new Date().getFullYear()} HairHobby. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link to="/" className="text-xs text-brand-500 hover:text-[#c8f250] transition-colors">
            Privacy
          </Link>
          <Link to="/" className="text-xs text-brand-500 hover:text-[#c8f250] transition-colors">
            Terms
          </Link>
          <Link to="/" className="text-xs text-brand-500 hover:text-[#c8f250] transition-colors">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}