/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import './main.css';

const Main = ({data, inicial}) => {

   const [filtro, setFiltro] = useState([]);

   const filtrarProyectos = (tecnologia) => {

    let proyectos = data.filter(proyecto => proyecto.type === tecnologia);

     setFiltro(proyectos);
  };

  return ( 
    <>
    <div className="d-flex justify-content-center">
      <div className="btn-group btn-group-lg">
        <button type="button" className="btn btn-color" onClick={() => filtrarProyectos('react')}>React</button>
        <button type="button" className="btn btn-color" onClick={() => filtrarProyectos('reactNative')}>React Native</button>
        <button type="button" className="btn btn-color" onClick={() => filtrarProyectos('otro')}>Otros</button>
      </div>
    </div>

    { filtro.length === 0 ?  
        inicial.map( data => (
          <div key={data.id}>
          <div className="principal">
            <hr />
            <div className="row areaPrincipal">
              <div className="col-md-6 areaImg">
                <img className="imgPrincipal" src={require(`../assets/proyect/${data.imgMaster}`)} alt={data.id} />
              </div>
              <div className="col-md-6 descripcionPrincipal">
                <h3>{data.title}</h3>
                <p>{data.text}</p>
                <button type="button" className="btn btn1" data-bs-toggle="modal" data-bs-target={data.target}>Ver más</button>
                <a href={data.codigo} target="_blank" rel="noreferrer"><button type="button" className="btn btn2">Código</button></a> 
              </div>
            </div>
          </div>

          <div className="modal" id={data.idModal}>
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content">
          
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h4 className="modal-title text-center">{data.title}</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
          
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <div id={data.idDemo} className="carousel slide" data-bs-ride="carousel">
                  
                    {/* <!-- The slideshow/carousel --> */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={require(`../assets/proyect/${data.imgMaster}`)} alt={data.img} className="d-block w-20 img-fluid mx-auto d-block imgCar" />
                      </div>
                      {
                        data.img.map( (img, index) => (
                          
                          <div className="carousel-item" key={index}>
                            <img src={require(`../assets/proyect/${img}`)} alt={data.img} className="d-block w-20 img-fluid mx-auto d-block imgCar" />
                          </div>
                          
                        ))
                      }
                    </div>
                   
                    {/* <!-- Left and right controls/icons --> */}
                    <button className="carousel-control-prev" type="button" data-bs-target={data.demoTarget} data-bs-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={data.demoTarget} data-bs-slide="next">
                      <span className="carousel-control-next-icon"></span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        ))
      :
      filtro.map( data => (
        <div key={data.id}>
          <div className="principal">
            <hr />
            <div className="row areaPrincipal">
              <div className="col-md-6 areaImg">
                <img className="imgPrincipal" src={require(`../assets/proyect/${data.imgMaster}`)} alt={data.id} />
              </div>
              <div className="col-md-6 descripcionPrincipal">
                <h3>{data.title}</h3>
                <p>{data.text}</p>
                <button type="button" className="btn btn1" data-bs-toggle="modal" data-bs-target={data.target}>Ver más</button>
                <a href={data.codigo} target="_blank" rel="noreferrer"><button type="button" className="btn btn2">Código</button></a> 
              </div>
            </div>
          </div>

          <div className="modal" id={data.idModal}>
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content">
          
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h4 className="modal-title text-center">{data.title}</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
          
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <div id={data.idDemo} className="carousel slide" data-bs-ride="carousel">
                  
                    {/* <!-- The slideshow/carousel --> */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={require(`../assets/proyect/${data.imgMaster}`)} alt={data.img} className="d-block w-20 img-fluid mx-auto d-block imgCar" />
                      </div>
                      {
                        data.img.map( (img, index) => (
                          
                          <div className="carousel-item" key={index}>
                            <img src={require(`../assets/proyect/${img}`)} alt={data.img} className="d-block w-20 img-fluid mx-auto d-block imgCar" />
                          </div>
                          
                        ))
                      }
                    </div>
                   
                    {/* <!-- Left and right controls/icons --> */}
                    <button className="carousel-control-prev" type="button" data-bs-target={data.demoTarget} data-bs-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={data.demoTarget} data-bs-slide="next">
                      <span className="carousel-control-next-icon"></span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))
    }

    </>

   );
}
 
export default Main;
