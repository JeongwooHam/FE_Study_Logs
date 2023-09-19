import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "../components/map";
import React from "react";
import Marker from "../components/marker";
import SearchBar from "../components/search-bar";

const Main: React.FC = () => {
  const apiKey = process.env.REACT_APP_KEY;
  if (apiKey)
    return (
      <div style={{ textAlign: "center" }}>
        <Wrapper apiKey={apiKey}>
          <h1>My Map :)</h1>
          <Map></Map>
          <SearchBar />
        </Wrapper>
      </div>
    );
  return null;
};

export default Main;
