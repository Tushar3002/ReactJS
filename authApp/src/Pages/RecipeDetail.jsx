import { useLoaderData } from "react-router-dom";

function RecipeDetail() {
  const RecipeDetail = useLoaderData();

  const {
    name,
    caloriesPerServing,
    cookTimeMinutes,
    cuisine,
    difficulty,
    image,
    ingredients,
    instructions,
    prepTimeMinutes,
    rating,
    tags,
  } = RecipeDetail.data;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">{name}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full md:w-[400px] h-auto rounded-lg object-cover shadow-md"
          />
          <div className="mt-4 pt-3 space-y-2">
            <p>
              <span className="font-semibold">Cuisine:</span> {cuisine}
            </p>
            <p>
              <span className="font-semibold">Difficulty:</span> {difficulty}
            </p>
            <p>
              <span className="font-semibold">Prep Time:</span>{" "}
              {prepTimeMinutes} mins
            </p>
            <p>
              <span className="font-semibold">Cook Time:</span>{" "}
              {cookTimeMinutes} mins
            </p>
            <p>
              <span className="font-semibold">Calories:</span>{" "}
              {caloriesPerServing} kcal
            </p>
            <p>
              <span className="font-semibold">Rating:</span> ⭐ {rating}
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc list-inside space-y-1">
              {ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Instructions</h3>
            <ol className="list-decimal list-inside space-y-1">
              {instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
              >
                # {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
