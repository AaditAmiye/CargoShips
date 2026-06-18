import "./map.css";
import mapimg from "../../assets/map3.jpg";
import { useEffect, useState } from "react";

function Map() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handler = () => {
      console.log("EVENT RECEIVED");
      setAnimate(true);

     
    };

    window.addEventListener("searchLocation", handler);

    return () => {
      window.removeEventListener("searchLocation", handler);
    };
  }, []);

  console.log("animate =", animate);

  return (
    <div className={animate ? "mapbox searching" : "mapbox"}>
      <img src={mapimg} alt="" />
    </div>
  );
}

export default Map;