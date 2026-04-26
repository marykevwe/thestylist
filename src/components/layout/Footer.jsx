export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="page-shell flex flex-col gap-3 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} TheStylist.com. Built for beauty bookings and business growth.</p>
        <p>React • Tailwind • Express • MongoDB</p>
      </div>
    </footer>
  );
}
