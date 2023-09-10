import React from "react";
import Badge from "./Badge"; 

function Badges() {
  const colors = ["purple", "indigo", "red", "green", "blue", "yellow", "pink", "gray"];

  return (
    <div className="badge-grid">
      {colors.map((color) => (
        <Badge key={color} color={color} size="sm">
          Badge 
        </Badge>
      ))}
    </div>
  );
}

export default Badges;
