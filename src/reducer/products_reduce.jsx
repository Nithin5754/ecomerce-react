import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCESS,
  GET_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCESS,
  GET_SINGLE_PRODUCT_BEGIN
} from "../action";

const products_reduce = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSideBarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSideBarOpen: false };
    case GET_PRODUCT_BEGIN:
      return { ...state, product_loading: true };
    case GET_PRODUCT_SUCESS:
      const featuredProduct = action.payload.filter(
        (load) => load.featured === true
      );
      console.log(featuredProduct);
      return {
        ...state,
        products: action.payload,
        features_product: featuredProduct,
        product_loading: false,
        product_error:false
      };
      case GET_PRODUCT_ERROR:
          return {...state,product_error:true,product_loading:false}
      case GET_SINGLE_PRODUCT_BEGIN:
         return {...state,single_product_error:false,single_product_loading:true}
      case GET_SINGLE_PRODUCT_SUCESS:
          return {...state,single_product_error:false,single_product_loading:false,single_product:action.payload}  
      case GET_SINGLE_PRODUCT_ERROR:
          return {...state,single_product_loading:false,single_product_error:true}         
    default:
      return state;
  }
};
export default products_reduce;
