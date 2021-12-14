import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <form className="search">
      <input type="search" placeholder="Search in tasks..." />
      <button className="btn btn-search" type="button">
        <BsSearch />
      </button>
    </form>
  );
};

export default Search;
