import { Routes, Route } from 'react-router-dom';
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
import { createContext, useEffect, useState } from 'react';
import HeaderMobile from './components/headerMobile/headerMobile';
import FooterMobile from './components/footerMobile/footerMobile';
import ServiceScreen from './screen/servicescreen/ServiecScreen';
import SplashScreen from './screen/splashscreen/SplashScreen';

export const serviceContext = createContext();

function App() {
  const [screenState, usescreenState] = useState(window.innerWidth);
  const [serviceState, useserviceState] = useState("meomeo");
  const [visible, setVisible] = useState(true); // Điều khiển việc hiển thị SplashScreen

  // Hàm để hiển thị splashscreen trên trang chủ
  const HandleRenderSplash = () => {
    return window.location.pathname === "/" && visible ? <SplashScreen /> : null;
  };

  // Hàm để ẩn SplashScreen sau một khoảng thời gian
  const RemoveSplash = () => {
    setTimeout(() => {
      setVisible(false); // Đặt lại visible thành false sau 2 giây
    }, 2000); // Thời gian ẩn SplashScreen
  };

  useEffect(() => {
    RemoveSplash(); // Gọi hàm để ẩn splash screen khi component mount

    const handleResize = () => {
      usescreenState(window.innerWidth); // Cập nhật chiều rộng khi cửa sổ thay đổi kích thước
    };

    window.addEventListener("resize", handleResize); // Lắng nghe sự kiện resize

    // Cleanup: dọn dẹp khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Chạy một lần khi component mount

  return (
    <serviceContext.Provider value={{ serviceState, useserviceState }}>
      <div className="App flex flex-col items-center bg-main relative">
        <div className="wrapper">
          {screenState > 480 ? <Header /> : <HeaderMobile />}
        </div>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/project" element={<ProjectScreen />} />
            <Route path="/projectDetailVer1/:id" element={<ProjectDetailScreenVer1 />} />
            <Route path="/projectDetailVer2/:id" element={<ProjectDetailScreenVer2 />} />
            <Route path="/projectDetailVer3/:id" element={<ProjectDetailScreenVer3 />} />
            <Route path="/contact/" element={<ContactScreen witdh={screenState} />} />
            <Route path="/about/" element={<PortfolioScreen />} />
            <Route path="/service" element={<ServiceScreen />} />
            <Route />
          </Routes>
        </div>
        {screenState > 480 ? <div className="w-full"><Footer /></div> : <div className="wrapper"><FooterMobile /></div>}

        {/* SplashScreen */}
        {HandleRenderSplash()}
      </div>
    </serviceContext.Provider>
  );
}

export default App;
