import React from "react";

const SearchInput = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Chercher..."
      onChange={(e) => onSearch(e.target.value)}
      className="border p-2 mb-4 w-full"
    />
  );
};

export default SearchInput;
