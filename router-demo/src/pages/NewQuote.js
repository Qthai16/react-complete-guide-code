import QuoteForm from "../components/quotes/QuoteForm";
import { useState } from "react";

const NewQuote = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const addQuoteHandler = (quote) => {
    console.log("New quote added", quote);
  };
  return (
    <>
      <QuoteForm onAddQuote={addQuoteHandler} isLoading={isLoading} />
    </>
  );
};

export default NewQuote;
