import axios from "axios";

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface Geometry {
  location: {
    lat: number;
    lng: number;
  };
}

interface Result {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
}

interface GeocodeResponse {
  results?: Result[];
}

export const getLatLng_google = async (
  inputVal: string
): Promise<GeocodeResponse> => {
  const apiKey = process.env.REACT_APP_KEY;

  const url = `${
    process.env.REACT_APP_GOOGLE_GEOCODE
  }?address=${encodeURIComponent(inputVal)}&key=${apiKey}&language=ko`;

  const { data } = await axios.get<GeocodeResponse>(url);

  return data;
};
