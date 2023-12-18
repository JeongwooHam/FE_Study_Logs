import React from "react";

interface iconProps {
  title: string;
  style?: string;
  onClick?: () => void;
}

const materialIcons: React.FC<iconProps> = ({ title, style, onClick }) => {
  return (
    <span className={`material-icons-outlined ${style}`} onClick={onClick}>
      {title}
    </span>
  );
};

export default materialIcons;
