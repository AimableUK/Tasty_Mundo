import React from "react";
import NewFoods from "../../Data/TastyFoods/NewFoods";
import { getDailyItems } from "../../utils/getDailyItems";

const TastyNew = () => {
  const newToday = getDailyItems(NewFoods, 4, "newfoods");

  return (
    <section className="p-3 md:px-10 bg-primaryBody text-white">
      <h1 className="font-roboto text-lg md:text-2xl font-semibold">
        New from Tasty Mundo
      </h1>
      <div className="my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
        {newToday.map((food) => (
          <div key={food.id} className="rounded-md main text-start">
            <img
              src={food.image}
              loading="lazy"
              alt="speedy massaman beef stir-fry"
              className="w-fit rounded-t-md"
            />
            <div className="p-3">
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

export default TastyNew;
