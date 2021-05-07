import React from "react";

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
   const methodsData=[
     {
      text: "GDP per capita",
      img: {src: "img/icons/1.svg", alt: ""}
     },
     {
      text: "Social support",
      img: {src: "img/icons/2.svg", alt: ""}
     },
     {
      text: "Healthy life expectancy",
      img: {src: "img/icons/3.svg", alt: ""}
     },
     {
      text: "Freedom to make life choices",
      img: {src: "img/icons/4.svg", alt: ""}
     },
     {
      text: "Generosity",
      img: {src: "img/icons/5.svg", alt: ""}
     },
     {
      text: "Perception of corruption",
      img: {src: "img/icons/6.svg", alt: ""}
     }
   ]

  return (
    <article className="methods">
      <div className="methods_header">
        <h2>Methods and Philosophy</h2>
      </div>

      <div className="methods_box-wreapper">
        {
          // display infomation 
          methodsData.map((method) => (
            <MethodsBox method={method}/>
          ))
        }
      </div>
    </article>
  )
 }

 // display a method box when passed in the information for the methods
 const MethodsBox = ({method})=>(
   <div className="method_container">
      <img scr={method.img.src} />
       <div className="col">
         {method.text}
       </div>
     
   </div>
 )