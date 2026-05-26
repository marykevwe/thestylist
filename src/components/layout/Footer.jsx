// layout/Footer.jsx

const footerLinks = {
  "For Professionals": [
    "Set up my business",
    "How to get started",
    "Grow your business",
    "Manage your business",
    "Elevate client experience",
  ],
  "For Clients": [
    "Sign up to book",
    "Search",
    "Get $50",
    "Help Center",
  ],
  "HairHobby": [
    "Blog",
    "Help Center",
    "Careers",
    "Terms of Service for Pros",
    "Privacy",
    "Sitemap",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0e2a1e] text-[#a8d5b5] font-['DM_Sans']">
      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <p className="font-['Playfair_Display'] text-[#c8f250] text-2xl font-black mb-3">
            HairHobby
          </p>
          <p className="text-sm leading-relaxed text-[#7daa8e] max-w-[200px]">
            Bringing hair professionals and clients together, one booking at a time.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-5">
            {[
              { label: "Facebook", icon: "📘" },
              { label: "Instagram", icon: "📷" },
              { label: "X", icon: "𝕏" },
            ].map((s) => (
              <button
                key={s.label}
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-[#1a4a32] hover:bg-[#2a6a48] flex items-center justify-center text-sm transition-colors"
              >
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <p className="text-white font-semibold text-sm mb-4">{heading}</p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#7daa8e] hover:text-[#c8f250] text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a4a32] py-5 px-6">
        <p className="text-center text-xs text-[#4a7a5a]">
          © {new Date().getFullYear()} HairHobby. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
