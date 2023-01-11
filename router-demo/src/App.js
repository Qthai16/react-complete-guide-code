import { Route, Switch } from "react-router-dom";
import CommentsList from "./components/comments/CommentsList";
import NewCommentForm from "./components/comments/NewCommentForm";
import QuoteList from "./components/quotes/QuoteList";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Card from "./components/UI/Card";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";

function App() {
  const dummyComments = [
    { id: 0, text: "This is a positive comment" },
    { id: 1, text: "This is a negative comment" },
    { id: 2, text: "This is a dummy comment" },
    { id: 3, text: "This is a dummy 2 comment" },
  ];

  const dummyQuoteList = [
    { id: 0, author: "Unknown author", text: "This is a very famous quote" },
    {
      id: 1,
      author: "Famous author",
      text: "This is random quote from unknown person",
    },
    { id: 2, author: "Random author", text: "Quote from author 2" },
    { id: 3, author: "Female author", text: "Quote from author 3" },
  ];

  // <Comments />
  // <CommentsList comments={dummyComments} />

  return (
    <>
      <Layout>
        <Card>
          <Switch>
            <Route path="/" exact>
              <div
                style={{
                  fontSize: "1.5rem",
                  color: "red",
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                Welcome to daily quotes
              </div>
            </Route>
            <Route path="/quotes" exact>
              <QuoteList quotes={dummyQuoteList} />
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetails />
            </Route>
            <Route path="/new-quote" exact>
              <NewQuote />
            </Route>
            <Route path="/comments" exact>
              <CommentsList comments={dummyComments} />
            </Route>
          </Switch>
        </Card>
      </Layout>
    </>
  );
}

export default App;
