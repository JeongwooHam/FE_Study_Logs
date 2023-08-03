import React from "react";
import { FC } from "react";

type UserProps = {
  name: string;
  cart: number;
};

const UserBox: FC<UserProps> = ({ name, cart }) => {
  return (
    <div>
      <div>name: {name}</div>
      <div>cart: {cart}</div>
    </div>
  );
};

UserBox.displayName = "User Info";

export default UserBox;
