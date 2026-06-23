import "./shipCard.css";

function ShipCard({
  ship,
}) {
  return (
    <div className="shipCard">
      <h1>
        {ship.name}
      </h1>

      <p>
        IMO :
        {ship.imo}
      </p>

      <p>
        MMSI :
        {ship.mmsi}
      </p>

      <p>
        Company :
        {ship.company}
      </p>

      <p>
        Type :
        {ship.type}
      </p>

      <p>
        Latitude :
        {ship.lat}
      </p>

      <p>
        Longitude :
        {ship.lng}
      </p>

      <p>
        Departure :
        {
          ship.departurePort
        }
      </p>

      <p>
        Arrival :
        {
          ship.arrivalPort
        }
      </p>

      <p>
        Last Port :
        {ship.lastPort}
      </p>

      <p>
        Final Port :
        {ship.finalPort}
      </p>

      <p>
        Speed :
        {ship.speed}
        knots
      </p>

      <p>
        Fuel :
        {ship.fuel}%
      </p>
    </div>
  );
}

export default ShipCard;