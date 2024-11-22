"use client";
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "../../icons/SearchIcon";
import CloseIcon from "../../icons/CloseIcon";
import SearchComponent from "./SearchComponent";

const Search = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isFocus, setFocus] = useState<boolean>(false);
  const [showSearchComponent, setShowSearchComponent] =
    useState<boolean>(false);
  const [handleSearchTerm, setHandleSearchTerm] = useState<string>("");

  const handleFocus = (focus: boolean) => {
    setFocus(focus);
    setShowSearchComponent(focus);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHandleSearchTerm(e.target.value);
    console.log(handleSearchTerm);
  };

  
  const handleReset = () => {
    setHandleSearchTerm("");
    handleFocus(false);
  };

  //

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handleFocus(false)
        }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`flex gap-2 relative w-full
    bg-gray-200 border-solid rounded-3xl p-2
    border-2 ${isFocus && "border-[#181C14]"}
    justify-center items-center`}
    >
      <SearchIcon />
      <input
        className="outline-none bg-transparent text-sm"
        value={handleSearchTerm}
        id="searchInput"
        name="searchInput"
        type="text"
        onChange={handleChange}
        onFocus={() => handleFocus(true)}
      />
      
      <div
        onClick={handleReset}
        id="closeButton"
        className={`cursor-pointer absolute right-2 text-lg duration-500 ${
          showSearchComponent ? "block" : "hidden"
        }`}
      >
        <CloseIcon />
      </div>

      {showSearchComponent && <SearchComponent />}
    </div>
  );
};

export default Search;
