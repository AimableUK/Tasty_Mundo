import React, { useState } from "react";
import NewFoods from "../../Data/TastyFoods/NewFoods";
import { getDailyItems } from "../../utils/getDailyItems";
import { useNavigate } from "react-router-dom";

const TastyNew = () => {
  const [previewId, setPreviewId] = useState(false);

  const navigate = useNavigate();

  const newToday = getDailyItems(NewFoods, 4, "newfoods");

  const viewIngredients = (id) => {
    setPreviewId((prevId) => (prevId === id ? null : id));
  };

  const handleRecipe = (recipe) => {
    const found = NewFoods.find((food) => food.id === recipe.id);

    if (!found) return;

    navigate(`/recipedetails/${found.id}`);
  };

  return (
    <section className="p-3 md:px-10 bg-primaryBody text-white">
      <h1 className="font-roboto text-lg md:text-2xl font-semibold">
        New from Tasty Mundo
      </h1>
      <div className="main-container my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {newToday.map((food) => (
          <div
            key={food.id}
            className="rounded-md main flex flex-col justify-between text-start h-full hover:z-10"
          >
            {previewId === food.id ? (
              <div className="-z-10 p-4 bg-[#1e2235] rounded-b-md h-full border-t-2 border-primaryColor transition-all duration-300 overflow-y-scroll scrollbar-hide">
                <h4 className="text-lg font-semibold text-white mb-3 border-b border-gray-600 pb-1">
                  Ingredients
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm leading-relaxed">
                  {food.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="transition-all duration-300 ease-in-out">
                <img
                  src={food.image}
                  loading="lazy"
                  alt="speedy massaman beef stir-fry"
                  className="w-fit rounded-t-md"
                />
                <div className="flex flex-col flex-grow justify-between p-3">
                  <h3 className="font-roboto font-semibold">
                    {food.food_name}
                  </h3>
                  <p className="text-start text-sm text-gray-300">
                    {food.description}
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-row w-full items-center gap-x-1 p-2">
              <button
                onClick={() => handleRecipe(food)}
                className="mt-2 border p-1 w-full rounded-md border-gray-400 hover:bg-primaryColor hover:border-primaryBody transform transition-all duration-200 ease-in-out font-semibold active:scale-95"
              >
                View Recipe
              </button>
              <div className="relative group">
                <button
                  onClick={() => viewIngredients(food.id)}
                  className="mt-2 border p-1 rounded-md border-gray-400 hover:bg-primaryColor hover:border-primaryBody transform transition-all duration-200 ease-in-out font-semibold active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </button>
                <p className="group-hover:block whitespace-nowrap hidden absolute border rounded z-50 px-2 bg-primaryBody border-gray-400 -right-3 -bottom-8">
                  {previewId === food.id ? "Hide" : "View"} Ingredients
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TastyNew;
