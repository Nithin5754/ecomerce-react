import React, { useEffect } from "react";
import axios from "axios";
import { useContext, useReducer } from "react";
import productReducer from "../reducer/products_reduce";
import { products_url as url } from "../utils/constant";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCESS,
  GET_PRODUCT_BEGIN,
} from "../action";

const ProductContext = React.createContext();

let initalState = {
  isSideBarOpen: false,
  product_loading: false,
  product_error: false,
  products: [],
  features_product: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initalState);

  const sideBarOpen = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const sideBarClose = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchData = async () => {
try {
  dispatch({type:GET_PRODUCT_BEGIN})
  const response = await axios(url);
  const data =response.data
console.log(data);
  dispatch({type:GET_PRODUCT_SUCESS,payload:data})
} catch (error) {
  console.log(error.response);
  dispatch({type:GET_PRODUCT_ERROR})
  
}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, sideBarOpen, sideBarClose }}>
      {children}
    </ProductContext.Provider>
  );
};

const useGlobalProductProvider = () => {
  return useContext(ProductContext);
};

export { useGlobalProductProvider, ProductProvider };
