import React, { useState, Fragment } from "react";
import "./Search.css";
import MetaData from "../layout/Header/MetaData";
const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const SearchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <Fragment>
       <MetaData title="Search A Product--ECOMMERCE" /> 
      <form className="searchBox" onSubmit={SearchSubmitHandler}>
        <input
          type="text"
          placeholder="search a Product..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
