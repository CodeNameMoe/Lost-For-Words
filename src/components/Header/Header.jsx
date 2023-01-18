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
            Find your book of choice
          </h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam
            adipisci quae reprehenderit doloribus! Nesciunt laboriosam animi
            sapiente ab quaerat.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
}

export default Header;
