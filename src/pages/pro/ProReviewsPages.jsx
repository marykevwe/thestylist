// src/pages/pro/ProReviewsPage.jsx

export default function ProReviewsPage() {
  const reviews = [
    {
      id: 1,
      client: "Sarah",
      rating: 5,
      comment: "Amazing service and clean studio",
    },
    {
      id: 2,
      client: "James",
      rating: 4,
      comment: "Professional experience",
    },
  ];

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-black">
          Client Reviews
        </h1>

        <p className="text-sm text-slate-500">
          See what your clients are saying
        </p>
      </div>

      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white rounded-3xl border border-slate-200 p-5"
        >

          <div className="flex justify-between items-center">
            <h2 className="font-bold">
              {review.client}
            </h2>

            <span className="text-yellow-500">
              ⭐ {review.rating}
            </span>
          </div>

          <p className="mt-3 text-sm text-slate-600">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
}