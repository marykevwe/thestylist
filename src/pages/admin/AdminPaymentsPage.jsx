// src/pages/admin/AdminPaymentsPage.jsx

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-black text-slate-900">
          Payments
        </h1>

        <p className="text-sm text-slate-500">
          Payment analytics & transactions will appear here
        </p>
      </div>

      {/* EMPTY STATE */}
      <div
        className="
          bg-white rounded-3xl border border-dashed border-slate-300
          p-12 flex flex-col items-center justify-center text-center
        "
      >
        <div className="text-6xl">
          💳
        </div>

        <h2 className="mt-4 text-xl font-bold text-slate-900">
          Payments Coming Soon
        </h2>

        <p className="mt-2 text-sm text-slate-500 max-w-md">
          Paystack integration, transactions, commissions,
          payouts, and booking payments will appear here later.
        </p>
      </div>
    </div>
  );
}