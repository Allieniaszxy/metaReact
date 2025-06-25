import React from "react";

const PiggyBtn = ({ label, backgroundColor, color, padding, border }) => {
  const buttonStyle = {
    backgroundColor,
    color,
    padding,
    border,
    borderRadius: "20px",
    cursor: "pointer",
  };
  return (
    <div>
      <button style={buttonStyle} className="mb-4">
        {label}
      </button>
    </div>
  );
};

export default PiggyBtn;
