import "./App.css";
import { useEffect, useState } from "react";

import bgimg from "./assets/bg.jpeg";

import Map from "./compnents/map/map";
import Search from "./compnents/search/search";
import Msc from "./compnents/msc/msc";

import ShipCard from "./compnents/shipCard/shipCard";

import { getShips } from "./service/shipService";

function App() {
  const [ships, setShips] =
    useState([]);

  const [
    selectedShip,
    setSelectedShip,
  ] = useState(null);

  useEffect(() => {
    setShips(getShips());
  }, []);

  return (
    <>
      <div className="background">
        <img
          src={bgimg}
          alt=""
        />
      </div>

      <Map
        selectedShip={
          selectedShip
        }
      />

      <Search
        ships={ships}
        setSelectedShip={
          setSelectedShip
        }
      />

      <Msc />

      {selectedShip && (
        <ShipCard
          ship={selectedShip}
        />
      )}
    </>
  );
}

export default App;