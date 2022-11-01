import classes from "./Page.module.css";
import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <>
      <h1 className={classes.info}>Products page</h1>
      <ul>
        <li>
          <Link to="/products/id1">A book</Link>
        </li>
        <li>
          <Link to="/products/id2">A carpet</Link>
        </li>
        <li>
          <Link to="/products/id3">An Online Course</Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
