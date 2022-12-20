import React from "react";
import "./search.css";

export default function Search(props) {
  let { search,searchRef } = props;

  return (
    <div className="content-search-store">
      <div class="container">
        <input type="text" required="required" ref={searchRef} onChange={search} />
        <label>Search!</label>
        <i></i>
      </div>
    </div>
  );
}
