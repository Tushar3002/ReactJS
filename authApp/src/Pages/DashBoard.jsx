import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

function DashBoard() {
  const recipeData = useLoaderData(); 
  const navigate = useNavigate();

  const { recipes, total, page, limit } = recipeData;
  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (newPage) => {
    navigate(`/dashboard?page=${newPage}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold text-center mb-8">Recipe Dashboard</h1>

      {/* Card */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">
                <Link to={`/dashboard/${recipe.id}`} className="hover:text-emerald-800">
                  {recipe.name}
                </Link>
              </h3>
              <div className="flex justify-between text-sm text-gray-400">
                <span>⌚ {recipe.cookTimeMinutes} min</span>
                <span>⭐ {recipe.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={`px-3 py-1 rounded ${
              page === idx + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handlePageChange(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DashBoard;