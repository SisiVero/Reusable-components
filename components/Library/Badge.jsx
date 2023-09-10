import React from "react";
import classnames from "classnames";

export default function Badge({ children, className, size, color, ...rest }) {
  const sizeClass = size && `badge-${size}`;
  const colorClass = color && `badge-${color}`;
  const allClasses = classnames("badge", sizeClass, colorClass, className);

  return (
    <span className={allClasses} {...rest}>
      {children}
    </span>
  );
}
