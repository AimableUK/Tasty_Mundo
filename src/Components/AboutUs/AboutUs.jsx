const AboutUs = () => {
  return (
    <section className="py-28 md:py-20 px-6 md:px-12 bg-primaryBody text-white">
      <div className="max-w-4xl mx-auto whitespace-nowrap">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 font-roboto">
          About Us
        </h1>
        <p className="text-lg mb-6">
          At <span className="font-semibold">Tasty Mundo</span>, we believe that
          cooking should be easy, fun, and accessible to everyone. Our platform
          helps you create delicious meals using the ingredients you already
          have—no last-minute grocery runs, just smart and tasty solutions.
        </p>
      </div>

      <div className="bg-slate-900 max-w-4xl mx-auto mt-8 border p-3 pt-10 rounded-t-2xl shadow-md shadow-amber-800 transition ease-in-out duration-300 hover:scale-95">
        <h2 className="text-2xl font-semibold mb-4 font-roboto text-center">
          How It Works
        </h2>
        <p className="text-lg text-center">
          Simply enter the ingredients available in your kitchen, and our
          intelligent recipe generator will provide you with meal ideas that
          match your preferences.
        </p>
      </div>

      <div className="bg-slate-900 max-w-4xl mx-auto mt-8 border p-3 pt-10 rounded-2xl shadow-md shadow-amber-800">
        <h2 className="text-2xl font-semibold mb-4 font-roboto text-center">
          Why Choose Tasty Mundo?
        </h2>
        <ul className="text-lg space-y-3">
          <li className="flex flex-row items-center gap-1 flex-wrap max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">Smart Recipe Suggestions</span> –
            Personalized recipes based on what's in your fridge.
          </li>
          <li className="flex flex-row items-center gap-1 flex-wrap max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">Dietary Flexibility</span> – Find
            meals that suit vegetarian, vegan, gluten-free, or keto preferences.
          </li>
          <li className="flex flex-row items-center gap-1 flex-wrap max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">Save Time & Reduce Waste</span> –
            Cook with what you have and minimize food waste.
          </li>
          <li className="flex flex-row items-center gap-1 flex-wrap max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">Global Flavors</span> – Explore
            recipes from different cuisines and discover new favorites.
          </li>
        </ul>
      </div>

      <div className="bg-slate-900 max-w-4xl mx-auto mt-8 border p-3 pt-10 rounded-b-2xl shadow-md shadow-amber-800 transition ease-in-out duration-300 hover:scale-95">
        <h2 className="text-2xl font-semibold mb-4 font-roboto text-center">
          Our Mission
        </h2>
        <p className="text-lg text-center">
          We aim to make home cooking&nbsp;
          <span className="font-semibold">
            simpler, smarter, and more sustainable
          </span>
          . Whether you're a beginner or an experienced cook, Tasty Mundo helps
          you create meals with confidence.
        </p>
      </div>

      <div className="text-center mt-8">
        <p className="text-xl font-semibold">
          🍽️ Turn ingredients into inspiration—one recipe at a time.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
