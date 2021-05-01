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
       <p className="hero_subtitle">Data is collected from people in over 150 countries.</p>
     </div>
   </section>
 )

 // methods content
 function Methods(){
   const methodsData=[
     {
      text: "GDP per capita",
      img: {src: "", alt: ""}
     },
     {
      text: "Social support",
      img: {src: "", alt: ""}
     },
     {
      text: "Healthy life expectancy",
      img: {src: "", alt: ""}
     },
     {
      text: "Freedom to make life choices",
      img: {src: "", alt: ""}
     },
     {
      text: "Generosity",
      img: {src: "", alt: ""}
     },
     {
      text: "Perception of corruption",
      img: {src: "", alt: ""}
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
     
       <div className="col">
         {method.text}
       </div>
     
   </div>
 )