const AboutUs = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">About Us</h1>
        <p className="text-lg mb-6">
          At <span className="font-semibold">Tasty Mundo</span>, we believe that cooking should be easy, fun, and accessible to everyone. 
          Our platform helps you create delicious meals using the ingredients you already have—no last-minute grocery runs, just smart and tasty solutions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-8 border p-3 pt-10 rounded-t-3xl border-primaryColor bg-gradient-to-r from-getStartedpriColor via-primaryBody to-primaryColor via-70% transition ease-in-out duration-300 hover:scale-95">
      <h2 className="text-2xl font-semibold mb-4 font-poppins text-center">How It Works</h2>
        <p className="text-lg text-center">
          Simply enter the ingredients available in your kitchen, and our intelligent recipe generator will provide you with meal ideas that match your preferences.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-8 border p-3 pt-10 border-primaryColor bg-gradient-to-r from-getStartedpriColor via-primaryBody to-primaryColor via-70% transition ease-in-out duration-300 hover:scale-105">
        <h2 className="text-2xl font-semibold mb-4 font-poppins text-center">Why Choose Tasty Mundo?</h2>
        <ul className="text-lg space-y-3">
          <li>✅ <span className="font-semibold">Smart Recipe Suggestions</span> – Personalized recipes based on what’s in your fridge.</li>
          <li>✅ <span className="font-semibold">Dietary Flexibility</span> – Find meals that suit vegetarian, vegan, gluten-free, or keto preferences.</li>
          <li>✅ <span className="font-semibold">Save Time & Reduce Waste</span> – Cook with what you have and minimize food waste.</li>
          <li>✅ <span className="font-semibold">Global Flavors</span> – Explore recipes from different cuisines and discover new favorites.</li>
        </ul>
      </div>

      <div className="max-w-4xl mx-auto mt-8 border p-3 pt-10 rounded-b-3xl border-primaryColor bg-gradient-to-r from-getStartedpriColor via-primaryBody to-primaryColor via-70% transition ease-in-out duration-300 hover:scale-95">
        <h2 className="text-2xl font-semibold mb-4 font-poppins text-center">Our Mission</h2>
        <p className="text-lg text-center">
          We aim to make home cooking <span className="font-semibold">simpler, smarter, and more sustainable</span>. 
          Whether you're a beginner or an experienced cook, Tasty Mundo helps you create meals with confidence.
        </p>
      </div>

      <div className="text-center mt-8">
        <p className="text-xl font-semibold">🍽️ Turn ingredients into inspiration—one recipe at a time.</p>
      </div>
    </section>
  );
};

export default AboutUs;
