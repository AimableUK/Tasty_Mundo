const Services = () => {
  return (
    <section className="py-16 px-6 md:px-12 ">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg mb-8">
          At <span className="font-semibold">TastyMundo</span>, we offer a range of features to make cooking easier, smarter, and more enjoyable.
        </p>
      </div>

      <div className="service grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Smart Recipe Generator */}
        <div className="bg-getStartedpriColor p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Smart Recipe Generator</h2>
          <p className="text-lg">
            Enter your available ingredients, and our AI-powered system will generate creative and delicious recipes for you.
          </p>
        </div>

        {/* Dietary & Allergy Filters */}
        <div className="bg-getStartedsecColor p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Dietary & Allergy Filters</h2>
          <p className="text-lg">
            Customize your recipes based on dietary preferences such as vegetarian, vegan, gluten-free, or keto-friendly options.
          </p>
        </div>

        {/* Save & Organize Recipes */}
        <div className="bg-getStartedsecColor p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Save & Organize Recipes</h2>
          <p className="text-lg">
            Create an account to save your favorite recipes and organize them for easy access anytime.
          </p>
        </div>

        {/* Global Cuisine Selection */}
        <div className="bg-getStartedpriColor p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Global Cuisine Selection</h2>
          <p className="text-lg">
            Explore a diverse collection of recipes from around the world, bringing international flavors to your kitchen.
          </p>
        </div>

        {/* Step-by-Step Cooking Guides */}
        <div className="bg-getStartedpriColor p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Step-by-Step Cooking Guides</h2>
          <p className="text-lg">
            Follow clear, step-by-step instructions with images to ensure perfect results every time you cook.
          </p>
        </div>

        {/* Community Recipe Sharing */}
        <div className="bg-getStartedsecColor p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Community Recipe Sharing</h2>
          <p className="text-lg">
            Share your own recipes with the TastyMundo community and discover dishes created by other users.
          </p>
        </div>
      </div>

      <div className="text-center mt-10 text-white">
        <p className="text-xl font-semibold">🍽️ Your perfect meal is just a few clicks away!</p>
      </div>
    </section>
  );
};

export default Services;
