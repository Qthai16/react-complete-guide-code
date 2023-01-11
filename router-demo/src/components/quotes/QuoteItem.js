import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link
        to={`/quotes/${props.id}`}
        style={{
          textDecoration: "none",
          backgroundColor: "teal",
          color: "white",
          borderRadius: "4px",
          padding: "0.75rem 1.5rem",
          border: "1px solid teal",
          cursor: "pointer",
        }}
      >
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
