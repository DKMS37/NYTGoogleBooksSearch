import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div className="container">
    <form className="search text-center">
      <div className="form-group text-center">
        <label htmlFor="books">Book Search:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          // name="breed"
          // list="breeds"
          type="text"
          className="form-control text-center"
          placeholder="Type in a Book Title to begin"
          id="books"
        />

        {/* <datalist id="breeds">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist> */}

      </div>

      <div className="button">
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
    </div>
  );
}

export default SearchForm;
