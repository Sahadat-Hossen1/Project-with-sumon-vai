import Actions from "../Actions";
import { getProducts } from "../api_service/Product";
export const initialState = {
  loading: false,
  error: null,
  data: [],
};
const { DATA_FETCHING, DATA_FETCHED, DATA_FETCH_ERROR } = Actions.Product;
export default  function Reducer(state, action) {
  switch (action.type) {
    case DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case DATA_FETCHED: {
        // console.log(action.payload.data);
        
      return {
        ...state,
        loading: false,
        error: null,
        data: action?.payload?.data,
      };
    }
    case DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action?.payload?.error.messege,
      };
    default:
      return state;
  }
}
