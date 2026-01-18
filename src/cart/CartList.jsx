import React, { useEffect, useReducer } from "react";
import CartReducer, { initialState } from "../reducers/Cart";
import { getProducts } from "../api_service/Product";
import Actions from "../Actions";
import EndPoints from "../api_service/EndPoints";
import ProductSkeletonList from "../component/ProductSkeleton";
import ErrorCart from "../component/ErrorCart";
import NoProductFound from "../component/NoProductFound";
import CartItem from "./CartItem";

export default function CartList() {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const { loading, data, error } = state || {};
  console.log(data);

  useEffect(() => {
    (async () => {
      dispatch({
        type: Actions.Cart.DATA_FETCHING,
      });
      try {
        const data = await getProducts(EndPoints.CARTS);
        // console.log(data);

        dispatch({
          type: Actions.Cart.DATA_FETCHED,
          payload: {
            data: data,
          },
        });
      } catch (error) {
        dispatch({
          type: Actions.Cart.DATA_FETCH_ERROR,
          payload: {
            error: error,
          },
        });
      }
    })();
    console.log(state);
  }, []);

  let content = null;
  if (loading) {
    content = <h1 className="text-3xl text-center text-red-700">Loading ......</h1>;
  }
  if (!loading && error) {
    content = <p> something went wrong</p>;
  }
  if (!loading && !error && data.length === 0) {
    content = <p>Emty cart</p>
  }
  if (!loading && !error && data.length > 0) {
    content = (
      <div className="max-w-3xl mx-auto mt-10 space-y-4">
        {data.map((cart) => (
          <CartItem cart={cart} key={cart.id}/>
        ))}
      </div>
    );
  }
  // return (
  //   <div className="max-w-3xl mx-auto mt-10 space-y-4">
  //     {data.map((cart) => (
  //       <CartItem cart={cart} key={cart.id} />
  //     ))}
  //   </div>
  // );
  return content
}
