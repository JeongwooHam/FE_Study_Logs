import React, { FormEvent, useRef } from "react";

const SearchBar: React.FC = () => {
  const locationInputRef = useRef<HTMLInputElement>(null);

  const onSearchLocation = (e: FormEvent) => {
    e.preventDefault();

    const submitVal = locationInputRef.current!.value;
    console.log("입력값", submitVal);
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
