import React from "react";
import { FaCaretDown, FaInbox, FaRegTimesCircle } from "react-icons/fa";
import classnames from "classnames";

export default function Tooltips({ title, background,body, icon,inbox, text, ...rest }) {
  const [close, setClose] = React.useState(true);

  function toggleClose() {
    setClose(false);
  }

  let backgroundClass = background && `tooltip-container tooltip-${background}`;
  let iconBg = icon && `tooltip-bottom-icon tooltip-${background}-icon`;
  let inboxIcon = inbox && `tooltip-inbox-icon tooltip-${background}-inbox`;
  let closeIcon = close && `tooltip-close tooltip-${background}-close`;
  let textBg = body && `tooltip-text tooltip-${background}-text`;

  return (
    close ? (
      <div className={backgroundClass} onClick={toggleClose}>
        <div className="tooltip-icon-cont">
          <FaInbox className={inboxIcon} />
          <p className="tooltip-title">{title}</p>
          <FaRegTimesCircle className={closeIcon} />
        </div>
        <p className={textBg}>{text}</p>
        <FaCaretDown className={iconBg} />
      </div>
    ) : null
  );
}
