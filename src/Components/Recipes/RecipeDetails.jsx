import React from "react";
import beetrootHummusToastImg from "../../assets/beetrootHummusToast.webp";

const RecipeDetails = () => {
  return (
    <div className="p-3 md:px-10 pt-20 text-white bg-primaryBody">
      <div>
        {/* Image + Ingredients */}
        <div className="flex flex-col md:flex-row gap-10">
          <img
            src={beetrootHummusToastImg}
            alt="beetrootHummusToastImg"
            className="card p-1 relative rounded-xl shadow-xl object-cover"
          />
          <div>
            <h3>Ingredients: </h3>
            <p>Beetroot</p>
            <p>Chickpeas</p>
            <p>Tahini</p>
            <p>Garlic</p>
            <p>Lemon juice</p>
            <p>Bread slices</p>
          </div>
        </div>
        {/* Instructions */}
        <div>
          <h3>Instructions:</h3>
          <p>Roast the beetroot until tender, then peel and chop.</p>
          <p>
            Blend beetroot with chickpeas, tahini, garlic, lemon juice, and salt
            until smooth.
          </p>
          <p>Toast slices of crusty bread until golden.</p>
          <p>Spread the beetroot hummus generously on toast.</p>
          <p>
            Top with herbs, seeds, or a drizzle of olive oil for extra flavor.
          </p>
        </div>
      </div>
      {/* Related Recipes */}
      <div>
        <h2>Related Recipes</h2>
        <div></div>
      </div>
    </div>
  );
};

export default RecipeDetails;
