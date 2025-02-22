import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { 
  homeObjOne, 
  homeObjThree, 
  homeObjtwo,
} from '../components/InfoSection/Data';
import Services from '../components/services';
import Footer from '../components/Footer';

const Home= () => {
    const [isOpen, setIsOpen] = useState (false);
    const toggle = () => {
        setIsOpen(! isOpen)
    };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjtwo} />
      <Services/>
      <InfoSection {...homeObjThree} />
      <Footer/>
    </>
  );
};

export default Home;
