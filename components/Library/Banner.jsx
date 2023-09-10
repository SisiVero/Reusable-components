import React from "react";
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

const statusIcons = {
  successful: <FaCheckCircle />,
  warning: <FaExclamationTriangle />,
  error: <FaTimesCircle />,
  neutral: <FaInfoCircle />
};

export default function Banner({ children, status, title, background, text, ...rest }) {
  let statusClass = status && `banner-${status}`;
  let titleClass = title && `banner-title banner-${status}-title`;
  let textClass = text && `banner-text banner-${status}-text`;
  let backgroundClass = background && `banner-container banner-${background}`;

  return (
    <div className={backgroundClass}>
      <div className={statusClass}>
        {statusIcons[status]}
        <p className={titleClass}>{title}</p>
      </div>
      <div className={textClass}>
        <p>{text}</p>
      </div>
    </div>
  );
}

