import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.result.map(value=> (
        <li key={value} className="list-group-item">
         
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
