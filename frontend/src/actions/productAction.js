import axios from "axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProduct = (keyword=" ") => async (dispatch) => {

  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    let link=`http://localhost:4000/api1/products?keyword=${keyword}`
    const { data } = await axios.get(link);
    //console.log(data)
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const getProductDetails = (id) => async (dispatch) => {

  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    //console.log('getproductdetail')
    const { data } = await axios.get(`http://localhost:4000/api1/product/${id}`);
    console.log(data)
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
    
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//CLEARING ERRORS
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  });
};

//"https://i.ibb.co/DRST11n/1.webp"
