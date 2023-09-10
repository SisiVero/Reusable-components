import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonial({imageSrc, text, bottomText, company, name}) {
  return (
    <div className="testimonial-container">
    <div className="testimonial-img-container">
    <img src={imageSrc} alt="User" className="user-image" />
    </div>
    <div className="testimonial-text-container">
      <FaQuoteLeft className="quote-icon" />
      <p className="testimonial-text">{text}</p>
      <p className="testimonial-name">{name}</p>
      <p className="company-name">{company}</p>
    </div>
    </div>
  );
}
