import React from "react";

const search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="text-white text-3xl">
      <div>
        <img src="public/search.svg" alt="search" />
        <input
          type="text"
          placeholder="search through movies"
          value={{ searchTerm }}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default search;
