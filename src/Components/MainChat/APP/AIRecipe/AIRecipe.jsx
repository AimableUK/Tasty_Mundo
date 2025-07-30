import ReactMarkdown from "react-markdown";

function AIRecipe({ recipe }) {
  return (
    <section aria-live="polite">
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}

export default AIRecipe;
