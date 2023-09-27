import React, { FormEvent, useRef } from "react";
// import { getLatLng } from "../apis/_geocode";
import { getLatLng_google } from "../apis/google_geocoder";

interface Props {
  setCenter: React.Dispatch<React.SetStateAction<google.maps.LatLngLiteral>>;
}

const SearchBar: React.FC<Props> = ({ setCenter }) => {
  const locationInputRef = useRef<HTMLInputElement>(null);

  const onSearchLocation = (e: FormEvent) => {
    e.preventDefault();

    const submitVal = locationInputRef.current!.value;
    console.log("입력값", submitVal);
    getLatLng_google(submitVal).then((res) => {
      if (res.results) setCenter(res.results[0].geometry.location);
    });
    if (locationInputRef.current) {
      locationInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={onSearchLocation}>
      <input
        type="text"
        id="location"
        placeholder="방문하고자 하는 국가를 검색해보세요!"
        ref={locationInputRef}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default SearchBar;
