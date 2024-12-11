

import { useEffect } from 'react'
import DiscussSection from '../../components/DiscussSection/DisscussSection'
import LendIdeaToWorldSection from '../../components/LendIdeasToworld/LendIdeasToWorld'
import RecentWork from '../../components/RecentWork/RecentWork'
import SkillAndExperience from '../../components/SkillsAndExperiment/SkillAndExperience'
import './index.css'
import SmoothScroll from 'smooth-scroll'

const HomeScreen = () =>{
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
        <div className="HomeScreen-wrapper pt-12 relative">
          <LendIdeaToWorldSection/>
          <SkillAndExperience/>
          <RecentWork/>
          <DiscussSection/> 
        </div>
    )
}
export default HomeScreen