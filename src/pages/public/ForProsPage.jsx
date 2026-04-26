import { Link } from "react-router-dom";
import SectionTitle from "../../components/shared/SectionTitle";

export default function ForProsPage() {
  return (
    <section className="py-16">
      <div className="page-shell">
        <SectionTitle eyebrow="For professionals" title="Run your beauty business from one dashboard." text="Create your booking page, manage services, collect appointments, organize clients, and grow your income." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Profile setup", "Build your public page with bio, services, and location."],
            ["Bookings", "Track appointments, statuses, and client requests."],
            ["Client management", "See who booked, when they booked, and what they ordered."],
            ["Revenue view", "Watch earnings and booking volume from your dashboard."],
          ].map(([title, text]) => (
            <div key={title} className="card p-6">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/register" className="btn-primary">Create professional account</Link>
        </div>
      </div>
    </section>
  );
}
