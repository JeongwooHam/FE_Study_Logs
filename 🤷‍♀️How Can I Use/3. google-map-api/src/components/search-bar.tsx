import React, { FormEvent, useRef } from "react";
import { getLatLng } from "../apis/geocode";

interface Props {
  setCenter: React.Dispatch<React.SetStateAction<google.maps.LatLngLiteral>>;
}

const SearchBar: React.FC<Props> = ({ setCenter }) => {
  const locationInputRef = useRef<HTMLInputElement>(null);

  const onSearchLocation = (e: FormEvent) => {
    e.preventDefault();

    const submitVal = locationInputRef.current!.value;
    console.log("입력값", submitVal);
    getLatLng(submitVal).then((res) => {
      console.log("res", res.results);
      if (res.results) setCenter(res.results[0].location);
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
