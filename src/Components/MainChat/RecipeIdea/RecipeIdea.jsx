import React, { useEffect, useState } from "react";
import trendingFlavors from "../../../Data/TastyFoods/trendingFlavors";
import ingredientsInSeason from "../../../Data/TastyFoods/ingredientsInSeason";

const RecipeIdea = ({ dialogRef, recipeIdea, setRecipeIdea }) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleChange = (value) => {
    setQuery(value.trimStart());
  };
  const allIng = [...trendingFlavors, ...ingredientsInSeason];

  const filteredIng = allIng.filter((ing) =>
    ing.label.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    recipeIdea && (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center md:py-5 pt-10">
        <div
          ref={dialogRef}
          className="relative bg-slate-950 border border-slate-800 md:rounded-xl rounded-t-xl max-w-5xl w-full shadow-xl z-50 h-full flex flex-col"
        >
          <div className="flex md:hidden self-center p-[1px] md:p-[2px] rounded-full my-2 bg-slate-300 w-2/6 "></div>

          {/* Search Bar */}
          <div className="flex flex-row items-center border-b border-slate-800 px-2 py-1">
            <input
              type="text"
              placeholder="Search an Ingredient..."
              value={query}
              onChange={(e) => handleChange(e.target.value)}
              className="w-full rounded-t-md py-3 px-3 outline-none bg-slate-950"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto pt-2 md:pt-5">
            {query.length < 1 ? (
              <div>
                {/* Trending Flavors */}
                <div className="flex flex-col px-2">
                  {/* Header */}
                  <div className="flex flex-row justify-between items-center">
                    <h1 className="font-roboto text-lg md:text-xl font-semibold pl-2">
                      Trending Flavors
                    </h1>
                  </div>
                  <div className="ingredient-container gap-1 p-1">
                    {trendingFlavors.map(({ id, src, alt, label }) => (
                      <div
                        key={id}
                        className="ingredient flex flex-col items-center mx-2 h-fit"
                      >
                        <img
                          src={src}
                          loading="lazy"
                          alt={alt}
                          className="size-20 rounded-full"
                        />
                        <h3 className="mt-2 text-sm font-medium text-center">
                          {label}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Ingredients In Season */}
                <div className="flex flex-col justify-center px-2 pt-3 md:pt-5">
                  {/* Header */}
                  <div className="flex flex-row justify-between items-center">
                    <h1 className="font-roboto text-lg md:text-xl font-semibold pl-2">
                      Ingredients In Season
                    </h1>
                  </div>
                  <div className="ingredient-container gap-1 p-1">
                    {ingredientsInSeason.map(({ id, src, alt, label }) => (
                      <div
                        key={id}
                        className="ingredient flex flex-col items-center mx-2 h-fit"
                      >
                        <img
                          src={src}
                          loading="lazy"
                          alt={alt}
                          className="size-20 rounded-full"
                        />
                        <h3 className="mt-2 text-sm font-medium text-center">
                          {label}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : filteredIng.length === 0 ? (
              <p className="text-gray-400 text-center py-4">No results found</p>
            ) : (
              <div className="ingredient-container gap-1 p-1">
                {filteredIng.map(({ id, src, alt, label }) => (
                  <div
                    key={id}
                    className="ingredient flex flex-col items-center mx-2 h-fit"
                  >
                    <img
                      src={src}
                      loading="lazy"
                      alt={alt}
                      className="size-20 rounded-full"
                    />
                    <h3 className="mt-2 text-sm font-medium text-center">
                      {label}
                    </h3>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Buttons in Dialog */}
          <div className="border-t border-slate-800 flex gap-2 items-center p-2">
            {/* Close Icon */}

            <button
              onClick={() => setRecipeIdea(false)}
              className="flex items-center gap-1 bg-slate-900 hover:bg-slate-800 active:bg-slate-700 px-3 py-1 rounded-md text-gray-200 font-semibold"
            >
              <i className="bx bx-shrink-right bx-xs cursor-pointer active:scale-75 transition-all duration-150 ease-out"></i>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default RecipeIdea;
