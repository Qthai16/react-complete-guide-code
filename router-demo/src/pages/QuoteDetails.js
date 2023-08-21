import { useParams, Route } from "react-router-dom";
import CommentsList from "../components/comments/CommentsList";
import Comments from "../components/comments/Comments";

const QuoteDetails = (props) => {
  const dummyComments = [
    { id: 0, text: "This is a positive comment" },
    { id: 1, text: "This is a negative comment" },
    { id: 2, text: "This is a dummy comment" },
    { id: 3, text: "This is a dummy 2 comment" },
  ];
  const params = useParams();
  return (
    <>
      <h1>{`New quote details ${params.quoteId}`}</h1>
      <CommentsList comments={dummyComments} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
