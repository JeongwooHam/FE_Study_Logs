import { ToggleContents } from "../consts/CONSTS";

const handleParamKey = (title, key) => {
  if (title && key) return ToggleContents[title][key];
  return <div>HOME</div>;
};

export default handleParamKey;
