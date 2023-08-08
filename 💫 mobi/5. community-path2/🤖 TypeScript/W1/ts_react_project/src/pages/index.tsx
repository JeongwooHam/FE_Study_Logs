import React from "react";
import UserBox from "../components/1. React.FC/1. React.FC";
import InputBox from "../components/5. PropsWithRef/5. PropsWithRef.tsx";
import UserPage from "../components/8. Dispatch/8. Dispatch.tsx";

const MainPage: React.FC = () => {
  return (
    <>
      {/* <UserBox name="Jane" cart={3} /> */}
      {/* <InputBox /> */}
      <UserPage />
    </>
  );
};

export default MainPage;
