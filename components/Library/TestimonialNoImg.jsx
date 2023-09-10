import React from "react"
import {FaQuoteLeft} from "react-icons/fa"
export default function TestimonialNoImg({text, name, company}){
    
    return(
        <div className="testimonialImg-text-container">
      <div className="testimonialImg-icon-cont"><FaQuoteLeft className="quoteImg-icon" /><p className="testimonialImg-work">Work<span className="testimonialImg-span">cation</span>
      </p></div>
      <p className="testimonialImg-text">{text}</p>
     <div className="testimonialImg-bottom-cont"> <p className="testimonialImg-name">{name} <span className="divider">/</span> <span className="companyImg-name">{company}</span></p>
     </div>

    </div>
    )
}