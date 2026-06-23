import "./search.css";
import {
  useState,
} from "react";

function Search({
  ships,
  setSelectedShip,
}) {
  const [searching,
    setSearching] =
    useState(false);

  const [
    value,
    setValue,
  ] = useState("");

  const handleSearch = (
    e
  ) => {
    if (e.key === "Enter") {
      setSearching(true);

      const ship =
        ships.find(
          (s) =>
            s.imo === value ||
            s.mmsi === value ||
            s.name
              .toLowerCase()
              .includes(
                value.toLowerCase()
              )
        );

      if (ship) {
        setSelectedShip(
          ship
        );
      } else {
        alert(
          "Ship not found"
        );
      }

      window.dispatchEvent(
        new CustomEvent(
          "searchLocation"
        )
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
        placeholder="IMO / MMSI / Ship Name"
        value={value}
        onChange={(e) =>
          setValue(
            e.target.value
          )
        }
        onKeyDown={
          handleSearch
        }
      />
    </div>
  );
}

export default Search;