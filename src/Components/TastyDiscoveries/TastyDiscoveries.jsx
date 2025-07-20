import React from "react";
import recentDiscoveries from "../../Data/TastyFoods/recentDiscoveries";
import { getDailyItems } from "../../utils/getDailyItems";

const TastyDiscoveries = () => {
  const discoveriesToday = getDailyItems(recentDiscoveries, 4, "discoveries");

  return (
    <section className="p-3 md:px-10 pt-8 bg-primaryBody text-white">
      {/* Header */}
      <h1 className="font-roboto text-lg md:text-2xl font-semibold">
        Your Recent Discoveries
      </h1>

      <div className="my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
        {discoveriesToday.map((food) => (
          <div
            key={food.id}
            className="rounded-md main flex flex-col text-start h-full"
          >
            <img
              src={food.image}
              loading="lazy"
              alt="speedy massaman beef stir-fry"
              className="w-fit rounded-t-md"
            />
            <div className="flex flex-col flex-grow justify-between p-3">
              <h3 className="font-roboto font-semibold">{food.food_name}</h3>
              <p className="text-start text-sm text-gray-300">
                {food.description}
              </p>
              <button className="mt-2 border p-1 w-full rounded-md border-gray-400 hover:bg-primaryColor hover:border-primaryBody transform transition-all duration-200 ease-in-out font-semibold active:scale-95">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TastyDiscoveries;
