import axios from "axios";

interface country {
  address: string;
  country: string;
  location: { lat: number; lng: number };
  location_type: string;
  region: string;
  type: string;
}

interface responseType {
  results?: country[];
}

export const getLatLng = async <T = responseType>(
  inputVal: string
): Promise<T> => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_URL,
    params: {
      address: inputVal,
      language: "ko",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_GEOCODE_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_GEOCODE_HOST,
    },
  };

  const { data } = await axios.request<T>(options);
  // console.log("res", response.data.results);
  return data;
};
