const Actions={
    Product:{
        DATA_FETCHING:"PRODUCT_DATA_FATCHING",
        DATA_FETCHED:"PRODUCT_DATA_FETCHED",
        DATA_FETCH_ERROR:"PRODUCT_DATA_FETCH_ERROR"
    },
    Cart:{
       DATA_FETCHING:"CART_DATA_FATCHING",
        DATA_FETCHED:"CART_DATA_FETCHED",
        DATA_FETCH_ERROR:"CART_DATA_FETCH_ERROR" 
    }
}
Object.freeze(Actions)
export default Actions;