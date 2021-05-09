import React from "react";
import economy from "../img/economy.jpg";
import family from "../img/family.jpg";
import freedom from "../img/freedom.jpg";
import generosity from "../img/generosity.jpg";
import girl from "../img/girl.jpg";
import handshake from "../img/handshake.jpg";

const imgPath = [
  {
  text: "GDP per capita",
  img: {
    src: economy,
    alt: "economy"
    }
  },
  {
    text: "Social support",
    img: {
    src: family,
    alt: "family"
    }
  },
  {
    text: "Healthy life expectancy",
    img: {
    src: girl,
    alt: "family"
    }
  },
  {
    text: "Free life choices",
    img: {
    src: freedom,
    alt: "family"
    }
  },
  {
    text: "Generosity",
    img: {
    src: generosity,
    alt: "family"
    }
  },
  {
    text: "Perception of corruption",
    img: {
    src: handshake,
    alt: "handshake"
    }
  },

]
const ImgDisplay = ({item}) => (
  <div className="imgWrapper">
    <p>{item.text}</p>
    <img className="methodImage" src={item.img.src} alt={item.img.alt} key={item} />
  </div>
)

export default function Home(){
  return(
    <main>
      <Hero />
      <Methods />
    </main>
  )
}
 // hero content
 const Hero = () => (
   <section className="hero">
     <div className="hero_content">
       <h1 className="hero_title">World Happiness Report</h1>
       <p className="hero_subtitle"><i>Data is collected from people in over 150 countries.</i></p>
     </div>
   </section>
 )

 // methods content
 function Methods(){
  return (
    <article className="methods">
      <div className="methods_header">
        <h2>Methods and Philosophy</h2>
      </div>

      <div className="methodDisplay">
        {imgPath.map((item) => (
          <ImgDisplay item={item} />
        ))}
      </div>
    </article>
  )
 }
