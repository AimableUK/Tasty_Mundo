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
      <div className="main-container my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {newToday.map((food) => (
          <div
            key={food.id}
            className="rounded-md main flex flex-col text-start h-full hover:z-10"
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
              <div className="flex flex-row w-full items-center gap-x-1">
                <button className="mt-2 border p-1 w-full rounded-md border-gray-400 hover:bg-primaryColor hover:border-primaryBody transform transition-all duration-200 ease-in-out font-semibold active:scale-95">
                  View Recipe
                </button>
                <div className="relative group">
                  <button className="mt-2 border p-1 rounded-md border-gray-400 hover:bg-primaryColor hover:border-primaryBody transform transition-all duration-200 ease-in-out font-semibold active:scale-95">
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
                  <p className="group-hover:block hidden absolute border rounded z-50 px-2 bg-primaryBody border-gray-400">
                    Preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TastyNew;
