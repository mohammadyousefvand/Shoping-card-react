import React, { useContext, useEffect } from "react";
import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";
import { FilterContext } from "../Context/ContextFilter";
import { useLocation } from "react-router-dom";

export default function SearchBar() {
  const { dispath } = useContext(FilterContext);

  const location = useLocation();
  const { pathname } = location;
  // change The route search input is empty
  useEffect(() => {
    dispath({ type: "SEARCH_KEYWORD", payload: "" });
  }, [pathname]);

  const searchKeywordHandler = (e) => {
    dispath({ type: "SEARCH_KEYWORD", payload: e.target.value });
  };
  return (
    <div className="searchBar_box">
      <input
        onChange={(e) => searchKeywordHandler(e)}
        type="text"
        placeholder="جستجو کنید ..."
      />
      <span>
        <FiSearch />
      </span>
    </div>
  );
}
