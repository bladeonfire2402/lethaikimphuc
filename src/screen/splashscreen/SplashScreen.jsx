import { useEffect, useState } from "react";
import './index.css';
import SplashScreenBlock from "../../components/splashScreenBlock/splashScreenBlock";

const SplashScreen = ({ visible }) => {
  const [splashVisible, setSplashVisible] = useState(visible);

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
    //nhún 1 nhịp
    setTimeout(()=>{      
      const testSplash=document.querySelector('.splash-logo ')
      testSplash.classList.add('pressing')
      
    },2000)

    setTimeout(()=>{
      const testSplash=document.querySelector('.splash-logo ')
      const testSplashimg=testSplash.querySelector('img')
      testSplashimg.style="animation:1s fadeOut2 forwards"

    },2300)

    //xoay logo
    setTimeout(()=>{
      const testSplash=document.querySelector('.splash-logo ')
      testSplash.style = "background-color:#fff; transition: background-color 1s ease-in-out; border-radius:10px; animation: rotateAnimation 1s forwards !important";      
    },2500)

    setTimeout(()=>{
      const testSplash=document.querySelector('.splash-logo ')
      const testSplashimg=testSplash.querySelector('img')
      testSplashimg.src=`${process.env.PUBLIC_URL}/assets/img/main/bluelogo.png`
      testSplashimg.style="animation:0.5s fadeIn2 forwards"
    },3300)

    setTimeout(()=>{
      const testSplash=document.querySelector('.splash-logo ')
      testSplash.style="animation: 2s fadeOut forwards !important; border-radius: 10px"
    },4500)

    
    setTimeout(()=>{
      const splashContainer=document.querySelector('.splashscreen-wrapper')
      splashContainer.style="animation: 2s fadeOut !important"
    },6000)
   



   
  },[])


  return (
    <div
      className={`splashscreen-wrapper absolute top-0 bg-secondary w-full z-30 flex  
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
