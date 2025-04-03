
import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MainCard from '../components/MainCard';
import ButtonGroups from '../components/ButtonGroups';
import Card3D from '../components/Card3D';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
       {/* <Header/> */}
       <NavBar/>
       <MainCard/>
       <Card3D/>
       <ButtonGroups/>
       <Pricing/>
       <Footer/>
    </div>
  )
}

export default HomePage
