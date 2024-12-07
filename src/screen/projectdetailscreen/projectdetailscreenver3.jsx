import { useNavigate, useParams } from "react-router-dom";
import { ProjectData } from "../../assets/data/data";
import  { CustomSwiper } from "../../components/customSwiper/customSwiper";
import './index.css'
import { CustomSwiperVer2 } from "../../components/customSwiper/customSwiperVer2";
import SmoothScroll from "smooth-scroll";

const ProjectDetailScreenVer3 = () => {

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

    const navigateToNext=useNavigate()
    const navigateToPrevous=useNavigate()
    const { id } = useParams(); // Get the project ID from the route parameters
    const DisplayProject = ProjectData.find(project => project.id === parseInt(id)); // Parse id to a number if needed
    
    const HandleNavigateToNext=(id)=>{
        if(id===1){
            navigateToNext(`/projectDetailVer1/${id+1}`)
        }
        else if(id===2){
            navigateToNext(`/projectDetailVer1/${id+1}`)
        }
        else if(id===3){
            navigateToNext(`/projectDetailVer2/${id+1}`)
        }
        else if(id===4){
            navigateToNext(`/projectDetailVer2/${id+1}`)
        }
        else if(id===5){
            navigateToNext(`/projectDetailVer1/${id+1}`)
            
        }
        else if(id===6){
            navigateToNext(`/projectDetailVer2/${1}`)
        }
        
    }

    return (
        <div className="ProjectDetailVer1-wrapper pt-10">
            <div className="mt-3">
            <CustomSwiperVer2 imgList={DisplayProject.img}/>
            <div className="mt-11 flex justify-between gap-20">
                <div className="w-1/2 flex flex-col items-start">
                   <h3 className="text-gilroy-bold text-2xl text-primary">{DisplayProject.title}</h3>
                   <p className="text-poppins font-light text-left">{DisplayProject.description}</p>
                </div>

                <div className="w-1/2 flex justify-between">
                   <div className="text-left">
                   <h3 className="text-gilroy-bold text-2xl text-primary">Role</h3>
                   <p className="text-poppins font-light text-left">{DisplayProject.Role}</p>
                   </div>

                   <div className="flex flex-col gap-6">
                    <div className="text-left">
                        <h3 className="text-gilroy-bold text-2xl text-primary">Tools Used</h3>
                        <p className="text-poppins font-light text-left">{DisplayProject.toolUsed}</p>
                    </div>
                    <div className="text-left">
                        <h3 className="text-gilroy-bold text-2xl text-primary">Project Type</h3>
                        <p className="text-poppins font-light text-left">{DisplayProject.projectType}</p>
                    </div>
                   </div>
                   
                </div>

            </div>
            </div>
            <div className="mt-14 gap-5 flex flex-col">
               <hr className="line-hr "/>
               <div className="flex justify-between">
                <h3 className="text-gilroy-bold text-2xl text-primary" >PREVIOUS PROJECT</h3>
                <h3 className="text-gilroy-bold text-2xl text-primary" onClick={()=>{HandleNavigateToNext(id)}}>NEXT PROJECT</h3>
               </div>
               <hr className="line-hr "/>
            </div>
        </div>
    );
};

export default ProjectDetailScreenVer3;
