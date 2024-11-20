
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

function App() {
  return (
    <div className="App flex flex-col  items-center bg-main">
      <div className='wrapper'>
        <Header/>
      </div>
      <div className='wrapper'>
         <Routes>
           <Route path='/' element={<HomeScreen/>}/>
           <Route path='/project' element={<ProjectScreen/>}/>
           <Route path='/projectDetailVer1/:id' element={<ProjectDetailScreenVer1/>}/>
           <Route path='/projectDetailVer2/:id' element={<ProjectDetailScreenVer2/>}/>
           <Route path='/projectDetailVer3/:id' element={<ProjectDetailScreenVer3/>}/>
           <Route path='/contact/' element={<ContactScreen/>}/>
           <Route path='/portfolio/' element={<PortfolioScreen/>}/>

           <Route/>
         </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
