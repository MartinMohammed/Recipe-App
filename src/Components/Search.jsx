import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import FormStyle from "./StyledComponents/FormStyle";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate(); // for navigating programatically

  useEffect(() => {
    // THIS SETUP CAUSES A WARNING "ROUTE CANNOT BE MATCHED" => but everything works
    const handleSubmitWithMeta = (event) => {
      const key = event.key;
      if (key === "Enter") {
        const navigatePath = `/searched/${searchText}`;
        console.log(searchText);
        navigate(navigatePath);
      }
      // else ignore
    };

    document.addEventListener("keydown", handleSubmitWithMeta);

    return () => {
      document.removeEventListener("keydown", handleSubmitWithMeta);
    };
  }, []);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searched/${searchText}`);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search"
      />
      <FaSearch onClick={handleSubmit} />
    </FormStyle>
  );
}

export default Search;
