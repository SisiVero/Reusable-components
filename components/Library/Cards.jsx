import React from "react"
import { VscCloudUpload, VscCloudDownload} from "react-icons/vsc"
import classnames from "classnames";

const icons = {
  cloudUp:<VscCloudUpload />,
  cloudDown: <VscCloudDownload />
};

export default function Card({children, iconBackground = "#3F75FE", icon, bodyText, desc, ...rest}){
 const iconStyle = {
    backgroundColor: iconBackground,
  };   
    
    return(
        <div className="card-container">
         <div className="card-icon-container">
             <div className="card-iconBg" style={iconStyle} >
                 {icons[icon]}
                 </div>
                 </div>
                 <div className="card-text-container">
                <h1 className="card-description">{desc}</h1>
                <p className="card-text">{bodyText}</p>
             </div>
        
        </div>
        
    )
}