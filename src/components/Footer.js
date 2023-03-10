import React from 'react';
import './footer.css';
import gmail from '../assets/img/gmail1.png';
import linkedin from '../assets/img/linkedin1.png';
import git from '../assets/img/git2.png';

const Footer = () => {

  const waveDiv = {
    height: '150px',
    overflow: 'hidden',
  };
  const waveSvg = {
    height: '100%', 
    width: '100%',
  };
  const wavePath = {
    stroke: 'none', 
    fill: 'rgb(245, 244, 244)',
  };

  return ( 
    <footer className="pie">
      <div style={waveDiv} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={waveSvg}><path d="M0.00,49.98 C88.88,201.81 312.36,-79.42 501.41,53.80 L502.54,-6.39 L0.00,0.00 Z" style={wavePath}></path></svg></div>

      <div className="row">
        <div className="col-md-6 tituloPie">
          <h2>Connect</h2>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-4 logos">
              <span className="pieArea"><a href="mailto:alexandro.aa86@gmail.com" target="_blank" rel="noreferrer"><img className="pieImg" src={gmail} alt="gmail" /></a></span>
            </div>
            <div className="col-4 logos">
              <span className="pieArea"><a href="https://www.linkedin.com/in/oscaralejandrorios-93a" target="_blank" rel="noreferrer"><img className="pieImg" src={linkedin} alt="linkedin" /></a></span>
            </div>
            <div className="col-4 logos">
              <span className="pieArea"><a href="https://github.com/RiosAlejandro" target="_blank" rel="noreferrer"><img className="pieImg" src={git} alt="portafolio" /></a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;
