import './App.css';
import Header from "./component/layout/Header/Header";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import React, {useEffect} from 'react';
import webFont from "webfontloader";
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';
import ProductDetails from "./component/product/ProductDetails";
import Products from './component/product/Products';
import Search from './component/product/Search';
function App() {
  useEffect(()=>{
    webFont.load({
      google:{
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  },[]);
  return (
    <Router>
         <Header/>
        
         <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/product/:id' element={<ProductDetails/>}/>
         <Route exact path='/products' element={<Products/>}/>
         <Route  path='/products/:keyword' element={<Products/>}/>
         <Route exact path='/search' element={<Search/>}/>
         </Routes>
        

         <Footer/>
         
    </Router>

  );
}

export default App;
