import React from 'react';
import ReactDOM from 'react-dom/client';
import Badges from "../components/Library/Badges"
import Banner from "../components/Library/Banner"
import Card from "../components/Library/Cards"; 
import Testimonial from "../components/Library/Testimonial"; 
import TestimonialNoImg from "../components/Library/TestimonialNoImg"; 
import Tooltips from "../components/Library/Tooltips"


function App() {
  return (
    <>
    <Badges />
   
    
    
    
     <Banner
        status="successful"
        title="Congratulations!"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        background="successfulBg"
      />
       <Banner
        status="warning"
        title="Attention"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.."
        background="warningBg"
      />
       <Banner
        status="error"
        title="There is a problem with your application!"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.."
        background="errorBg"
      />
       <Banner
        status="neutral"
        title="Update available"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        background="neutralBg"
      />
      
      <Card 
        icon="cloudUp"
        desc="Easy Deployment"
        iconBackground="blue"
        bodyText="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
      />
      
      
      <Testimonial
  imageSrc="./images/me.jpg"
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
  name="Chioma Veronca"
  company="Workcation, CTO"
/>

    <TestimonialNoImg
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
  name="Chioma Veronca"
  company="Workcation, CTO"
/>

 <Tooltips
        title="Archive notes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        background="greenBg"
        icon="greenBg"
        inbox="greenBg"
        close="greenBg"
        body="greenBg"
      />
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
