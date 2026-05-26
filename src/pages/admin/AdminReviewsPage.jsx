export default function AdminReviewsPage() {
  const reviews = [
    { id: 1, pro: "Elite Barber", rating: 5, comment: "Great service" },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-black">Reviews</h1>

      {reviews.map((r) => (
        <div key={r.id} className="bg-white p-4 rounded-xl shadow">
          <p className="font-bold">{r.pro}</p>
          <p className="text-yellow-500">⭐ {r.rating}</p>
          <p className="text-sm text-gray-600">{r.comment}</p>
        </div>
      ))}
    </div>
  );
}