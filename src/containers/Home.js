import React, { useState, useEffect } from 'react';
import { Projects } from '../data/data';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Section from '../components/Section';

const Home = () => {
 
  const [data, setData] = useState([]);

  const inicial = data.filter(proyecto => proyecto.type === 'react');
  
  useEffect(() => {
    setData(Projects);
  }, []);

  return ( 
    <>
    <Header />

    <Section />

    <Main data={data} inicial={inicial} />

    <Footer />
    </>
   );
}
 
export default Home;
