import { useEffect, useState } from "react";
import './index.css';

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

  return (
    <div
      className={`splashscreen-wrapper absolute top-0 bg-white w-full z-30 flex justify-center items-center 
        ${splashVisible ? 'show' : 'hideeffect'}`}
      style={{ height: `${height}px` }}
    >
      <div className="rounded-full ">
        <img className="" src={`${process.env.PUBLIC_URL}/assets/img/main/logo.png`} alt="logo" />
      </div>
    </div>
  );
};

export default SplashScreen;
