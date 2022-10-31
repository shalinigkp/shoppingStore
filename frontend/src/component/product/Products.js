import React, { Fragment,useEffect, useState } from 'react';
import "./Products.css";
import { useSelector,useDispatch } from 'react-redux';
import { clearErrors,getProduct } from '../../actions/productAction';
import Loader from "../layout/loader/Loader";
import ProductCard from '../Home/ProductCard';
import Pagination from "react-js-pagination";
import { Routes, Route, useParams } from "react-router-dom";

const Products = (props) => {
  let { keyword } = useParams();
    const dispatch=useDispatch();
const [currentPage,setCurrentPage]=useState(1);

const {loading,error,products,productsCount,resultPerPage}=useSelector(state=>state.products)
//const keyword=match.params.keyword;

const setCurrentPageNo=(e)=>{
  setCurrentPage(e)
}
    useEffect(()=>{
       dispatch(getProduct(keyword));
    },[dispatch,keyword])
  return (
    <Fragment>
        {loading ? <Loader/> :
         <Fragment>
            <h2 className='productsHeading'>Products</h2>
            <div className='products'>
                {products && products.map((item)=>(
                   <ProductCard product={item} key={item._id}/> 
                ))}
            </div>
            <div className='paginationBox'>
             <Pagination 
              activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
             />
            </div>
        </Fragment>}
    </Fragment>
  )
}

export default Products