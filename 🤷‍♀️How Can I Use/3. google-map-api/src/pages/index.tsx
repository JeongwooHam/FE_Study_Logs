import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./map";
import React from "react";

const Main: React.FC = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const handleRender = (location: Status) => <h1>{location}</h1>;

  if (apiKey)
    return (
      <div className="App">
        <Wrapper apiKey={apiKey} render={handleRender}>
          <Map />
        </Wrapper>
      </div>
    );
  return null;
};

export default Main;
