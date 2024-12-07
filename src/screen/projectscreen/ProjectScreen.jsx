
import SmoothScroll from 'smooth-scroll';
import GalleryLayout from '../../components/Gallery-Layout/Gallery-Layout'
import './index.css'

const ProjectScreen = () =>{
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
    return(
        <div className="ProjectScreen-wrapper pt-10">
            <h1 className="text-primary text-gilroy-bold text-center">My Notable <br/>Projects Handle</h1>
            <GalleryLayout/>
        </div>
    )
}
export default ProjectScreen