import axios from "axios";

const getLatLng = async (inputVal: string) => {
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

  try {
    const response = await axios.request(options);
    console.log("res", response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getLatLng };
