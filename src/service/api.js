const API_KEY = "YOUR_API_KEY";

export async function getShipByIMO(imo) {
  const response = await fetch(
    `https://api.datalastic.com/api/v0/vessel_info?api-key=${API_KEY}&imo=${imo}`
  );

  return response.json();
}