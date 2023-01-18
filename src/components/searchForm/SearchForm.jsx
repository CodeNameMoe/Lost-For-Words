import React from "react";
import { FaSearch } from "react-icons/fa";
import "../searchForm/searchForm.css";

function SearchForm() {
  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form">
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Where The Wild Things Are..."
              />
              <button type="submit" className="flex flex-c">
                <FaSearch className="text-purple" size={35} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
