import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function product({ product }) {
  return (
    <div className="flex flex-col container  justify-center  rounded">
      <Link to={`/product/${product._id}`}>
        <div className="shadow rounded container">
          <img src={product.image} alt="" className="" />
        </div>
      </Link>
      <Link to={`/product/${product._id}`}>
        <h5 className="my-2">
          <u>{product.name}</u>
        </h5>
      </Link>
      <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      <h5>${product.price}</h5>
    </div>
  );
}

export default product;
