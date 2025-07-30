import ReactMarkdown from "react-markdown";

function AIRecipe({ recipe }) {
  return (
    <section className="prose prose-invert max-w-none text-gray-300 text-sm md:text-[16px] font-nunito">
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}

export default AIRecipe;
