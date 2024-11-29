
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screen/homescreen/HomeScreen';
import ProjectScreen from './screen/projectscreen/ProjectScreen';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ProjectDetailScreenVer1 from './screen/projectdetailscreen/projectdetailscreenver1';
import ProjectDetailScreenVer2 from './screen/projectdetailscreen/projectdetailscreenver2';
import ProjectDetailScreenVer3 from './screen/projectdetailscreen/projectdetailscreenver3';
import ContactScreen from './screen/contactscreen/contactscreen';
import PortfolioScreen from './screen/portfolioscreen/PortfolioScreen';
import { useEffect, useState } from 'react';
import HeaderMobile from './components/headerMobile/headerMobile';
import FooterMobile from './components/footerMobile/footerMobile';

function App() {
  const [screenState,usescreenState]=useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      usescreenState(window.innerWidth);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="App flex flex-col  items-center bg-main">
      <div className='wrapper'>
        {screenState>480?<div><Header/></div>:<div><HeaderMobile/></div>}
      </div>
      <div className='wrapper'>
         <Routes>
           <Route path='/' element={<HomeScreen/>}/>
           <Route path='/project' element={<ProjectScreen/>}/>
           <Route path='/projectDetailVer1/:id' element={<ProjectDetailScreenVer1/>}/>
           <Route path='/projectDetailVer2/:id' element={<ProjectDetailScreenVer2/>}/>
           <Route path='/projectDetailVer3/:id' element={<ProjectDetailScreenVer3/>}/>
           <Route path='/contact/' element={<ContactScreen/>}/>
           <Route path='/about/' element={<PortfolioScreen/>}/>
           <Route/>
         </Routes>
      </div>
      {
      screenState>480?<div className='w-full'><Footer/></div>
      :
      <div className='wrapper '><FooterMobile/></div>
      }
    </div>
  );
}

export default App;
