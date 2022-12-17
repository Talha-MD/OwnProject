import React from "react";
import Product from "../Components/product";
import { useEffect } from "react";
import { listProduct } from "../Action/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

function HomeScreen({ match }) {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, product } = productList;
  useEffect(() => {
    dispatch(listProduct(keyword));
  }, [dispatch, keyword]);
  return (
    <div className="">
      <h3 className="mx-10 my-2">Latest Products</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {product.map((product, i) => {
            return (
              <div key={i} className="flex items-center flex-col">
                <Product product={product} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
