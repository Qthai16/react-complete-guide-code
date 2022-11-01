import classes from "./Page.module.css";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const params = useParams();
  return (
    <div className={classes.info}>
      Product details 
      <p>{params.productId}</p>
    </div>
  );
};

export default ProductDetails;
