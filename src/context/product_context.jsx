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
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCESS,
  GET_SINGLE_PRODUCT_BEGIN
} from "../action";

const ProductContext = React.createContext();

let initalState = {
  isSideBarOpen: false,
  product_loading: false,
  product_error: false,
  products: [],
  features_product: [],
  single_product_loading:false,
  single_product_error:false,
  single_product:{}
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

  dispatch({type:GET_PRODUCT_ERROR})
  
}
  }

  const singleFetchData=async(url)=>{
    try {
      dispatch({type:GET_SINGLE_PRODUCT_BEGIN})
       const response=await axios(url);
       const singleProduct=response.data
       console.log("haii",singleProduct,"hello");
       dispatch({type: GET_SINGLE_PRODUCT_SUCESS ,payload:singleProduct})
    } catch (error) {
      dispatch({type:GET_SINGLE_PRODUCT_ERROR})
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, sideBarOpen, sideBarClose,singleFetchData, }}>
      {children}
    </ProductContext.Provider>
  );
};

const useGlobalProductProvider = () => {
  return useContext(ProductContext);
};

export { useGlobalProductProvider, ProductProvider };
