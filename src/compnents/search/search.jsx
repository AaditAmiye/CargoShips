import "./search.css";
import { useState } from "react";

function Search() {
  const [searching, setSearching] = useState(false);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearching(true);

      console.log("ENTER");

      window.dispatchEvent(
        new CustomEvent("searchLocation")
      );

      
    }
  };

  return (
    <div
      className={
        searching
          ? "searchbox searching"
          : "searchbox"
      }
    >
      <input
        placeholder="Search..."
        onKeyDown={handleSearch}
      />
    </div>
  );
}

export default Search;