import React from 'react';
import './section.css';

const Section = () => {
  return ( 
    <section className="sobreMi">
      <h2>👋 Sobre mí.</h2>
      <p>
        Soy un desarrollador web, de Argentina. Con conocimientos por el momento en React, React-Native, Ionic y StencilJs.
        También poseo conocimientos de Backend a través de Node y Express.
      </p>
      <p>
        Estoy en <a href="https://github.com/RiosAlejandro" target="_blank" rel="noreferrer">Github</a> y en <a href="https://www.linkedin.com/in/oscaralejandrorios-93a" target="_blank" rel="noreferrer">Linkedin</a>.
      </p>
    </section>
   );
}
 
export default Section;