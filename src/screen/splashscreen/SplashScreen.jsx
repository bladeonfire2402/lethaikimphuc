import { useEffect, useState } from "react";
import './index.css';
import SmoothScroll from "smooth-scroll";


const SplashScreen = ({ visible }) => {
  const [splashVisible, setSplashVisible] = useState(visible);

  const slowScrollUp = () => {
    // Khởi tạo đối tượng SmoothScroll
    const scroll = new SmoothScroll('html', {
      speed: 300, // Tốc độ cuộn (300ms)
      speedAsDuration: true // Cài đặt tốc độ cuộn theo thời gian
    });
  
    // Cuộn lên đầu trang
    scroll.animateScroll(0); // Cuộn đến vị trí 0 (đầu trang)
  };
  
  // Sử dụng hàm slowScrollUp
  slowScrollUp();


  useEffect(() => {
    // Cập nhật trạng thái của splash screen khi prop `visible` thay đổi
    if (visible === false) {
      // Sau khi splash screen ẩn đi, chờ một chút rồi chuyển đổi
      setTimeout(() => setSplashVisible(false), 500); // Delay để hiệu ứng ẩn hoàn tất
    } else {
      setSplashVisible(true);
    }
  }, [visible]);


  const height = window.innerHeight;
  // Sử dụng useEffect để điều chỉnh overflow chỉ khi splash screen hiển thị
  // Tắt mở chức năng scroll khi có splashscreen
  useEffect(() => {
    if (splashVisible) {
      document.body.style.overflow = 'hidden'; // Tắt cuộn khi splash screen hiển thị
    } else {
      document.body.style.overflow = 'auto'; // Bật cuộn khi splash screen ẩn
    }


    // Cleanup để đảm bảo overflow trở lại bình thường khi component unmount hoặc khi splash screen bị ẩn
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [splashVisible]); // Chạy mỗi khi splashVisible thay đổi


  useEffect(()=>{
    setTimeout(()=>{      
      const testSplash=document.querySelector('.splash-logo ')
      testSplash.classList.add('pressing')
    },2000)


    setTimeout(()=>{
      const testSplash=document.querySelector('.splash-logo ')
      testSplash.style = "background-color:#ff8dc8; transition: background-color 1s ease-in-out, border-radius 0.3s; border-radius: 10px; animation: rotateAnimation 1s forwards !important;";      
    },2500)


    setTimeout(()=>{
      const testSplash=document.querySelector('.splash-logo ')
      const testSplashimg=testSplash.querySelector('img')
      testSplashimg.src=`${process.env.PUBLIC_URL}/assets/img/main/whitelogo.png`
    },3000)


    setTimeout(()=>{
      const testSplash=document.querySelector('.splash-logo ')
      testSplash.style="animation: 2s fadeOut !important;transform:rotate(360deg);background-color:#ff8dc8; border-radius: 10px;opacity:0"


    },3600)


    setTimeout(()=>{
      const splashContainer=document.querySelector('.splashscreen-wrapper')
      splashContainer.style="animation: 2s fadeOut !important"
    },5000)
  },[])
  return (
    <div
      className={`splashscreen-wrapper absolute top-0 bg-primary w-full z-30 flex  
        ${splashVisible ? 'show' : 'hideeffect'}`}
      style={{ height: `${height}px` }}
    >


      <div className="opendoor bg-primary h-1/2"></div>
 
      <div className="rounded-full bg-white splash-logo   px-3 py-3">
        <img className=" " src={`${process.env.PUBLIC_URL}/assets/img/main/logo.png`} alt="logo" />
      </div>


      {/** <SplashScreenBlock img={``} id={""} top={""} bottom={""} left={""} right={""} size={""} />*/}
     
   


    </div>
  );
};


export default SplashScreen;
