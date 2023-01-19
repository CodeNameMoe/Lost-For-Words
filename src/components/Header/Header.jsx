import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchForm from "../searchForm/SearchForm";
import "./header.css";

function Header() {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find your next favorite read with us
          </h2>
          <br />
          <p>
            Unlock the door to a world of knowledge and imagination with just a
            simple search.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
}

export default Header;
