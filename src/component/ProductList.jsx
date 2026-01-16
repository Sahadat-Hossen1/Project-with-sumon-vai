import React, { useEffect, useReducer } from "react";
import ProductItem from "./ProductItem";
import { getProducts } from "../api_service/Product";
import ProductReducer, { initialState } from "../reducers/Product";
import EndPoints from "../api_service/EndPoints";
import Actions from "../Actions";
import ProductSkeletonList from "./ProductSkeleton";
import ErrorCart from "./ErrorCart";
import NoProductFound from "./NoProductFound";

export default function ProductList() {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const { loading, data, error } = state || {};
  // console.log(loading);

  useEffect(() => {
    (async () => {
      dispatch({
        type: Actions.Product.DATA_FETCHING,
      });
      try {
        const data = await getProducts(EndPoints.PRODUCTS);
        // console.log(data);

        dispatch({
          type: Actions.Product.DATA_FETCHED,
          payload: {
            data: data,
          },
        });
      } catch (error) {
        dispatch({
          type: Actions.Product.DATA_FETCH_ERROR,
          payload: {
            error: error,
          },
        });
      }
    })();
    // console.log(state);
  }, []);
  let content = null;
  if (loading) {
    content = <ProductSkeletonList />;
  }
  if (!loading && error) {
    content = <ErrorCart></ErrorCart>;
  }
  if (!loading && !error && data.length === 0) {
    content = <NoProductFound></NoProductFound>;
  }
  if (!loading && !error && data.length > 0) {
    content = (
      <div className="grid grid-cols-4 gap-8 p-4">
        {data.map((product) => (
          <ProductItem  key={product.id}></ProductItem>
        ))}
      </div>
    );
  }
  return content;
}
