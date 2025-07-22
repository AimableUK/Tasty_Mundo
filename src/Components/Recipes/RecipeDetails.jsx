import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RelatedRecipes from "./RelatedRecipes";
import NewFoods from "../../Data/TastyFoods/NewFoods";
import recentDiscoveries from "../../Data/TastyFoods/recentDiscoveries";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${recipe?.food_name} Recipe`;
  }, [recipe?.food_name]);

  const allRecipes = [...NewFoods, ...recentDiscoveries];

  const recipe = allRecipes.find((food) => String(food.id) === String(id));

  if (!recipe) {
    return (
      <div className="text-white p-10">
        <h2 className="text-xl font-bold">Recipe not found.</h2>
      </div>
    );
  }

  const recipeIngredients = recipe?.ingredients || [];

  return (
    <div className="p-3 md:px-10 pt-20 text-white bg-primaryBody">
      <div className="flex flex-col gap-x-5 gap-y-3 h-full">
        <div className="flex flex-row items-center gap-2 w-full p-3  bg-[#1e2235] rounded-b-md h-full border-t-2 border-primaryColor">
          <div className="border-l-2 border-r-2 border-primaryColor p-[3px] rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-6 hover:scale-110 active:scale-95 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
              />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-lg md:text-xl text-gray-200">
              {recipe.food_name}
            </h2>
            <h4 className="text-gray-300">{recipe.description}</h4>
          </div>
        </div>
        <div className="recipe-container gap-5">
          {/* Image + Ingredients */}
          <div className="flex recipeDetails gap-5 h-full flex-wrap md:flex-nowrap lg:flex-wrap">
            <img
              src={recipe.image}
              alt="beetrootHummusToastImg"
              className="card cardi p-1 relative rounded-xl shadow-xl object-cover w-full"
            />
            <div className="w-full p-4 bg-[#1e2235] rounded-b-md border-t-2 border-primaryColor whitespace-nowrap">
              <h4 className="text-lg font-semibold text-white mb-3 border-b border-gray-600 pb-1">
                Ingredients
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm leading-relaxed">
                {recipe.ingredients.map((instruction, i) => (
                  <li key={i}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Instructions */}
          <div className="p-4 w-full bg-[#1e2235] rounded-b-md border-t-2 border-primaryColor transition-all duration-500 overflow-y-scroll scrollbar-hide">
            <h4 className="text-lg font-semibold text-white mb-3 border-b border-gray-600 pb-1">
              Instructions
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm leading-relaxed">
              {recipe.instructions.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Related Recipes */}
      <RelatedRecipes recipe={recipe} recipeIngredients={recipeIngredients} />
    </div>
  );
};

export default RecipeDetails;
