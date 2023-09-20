import axios from "axios";
export const getLocation = async (lat: number, lng: number) => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_REVERSE_URL,
    params: {
      location: `${lat}, ${lng}`,
      language: "en",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_GEOCODE_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_GEOCODE_HOST,
    },
  };

  const { data } = await axios.request(options);
  const target = data.results[0];
  if (target) console.log("지역", target.region, target.country);
  return data;
};
