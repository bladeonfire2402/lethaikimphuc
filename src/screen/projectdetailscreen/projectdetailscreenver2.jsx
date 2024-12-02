import { useNavigate, useParams } from "react-router-dom";
import { ProjectData } from "../../assets/data/data";
import { CustomSwiperVer2 } from "../../components/customSwiper/customSwiperVer2";
import { useState } from "react";
import { reload } from "../../func/reload";


const ProjectDetailScreenVer2=({func})=>{
    const { id } = useParams(); // Get the project ID from the route parameters
    const DisplayProject = ProjectData.find(project => project.id === parseInt(id)); // Parse id to a number if needed
 
    const slowScrollUp = () => {
      window.scrollTo({
        top: 0, // Cuộn đến đầu trang (Y = 0)
        behavior: 'smooth' // Thêm hiệu ứng cuộn mượt mà
      });
    }
    
    slowScrollUp();
    const navigate=useNavigate()

    const testid=id

    const convertNumber=(id)=>{
      return Number(id)
    }

    const handleNavigate=(state)=>{
      switch(state){
        case "next":
          navigateTonext(testid)
          window.scrollTo(0, 0);
          break;
        case "previous":
          navigateToprevious(testid)
          window.scrollTo(0, 0);
          break;
        default:
          break;
      }
    }

    const navigateTonext=(id)=>{
      const navnextver1=`/projectDetailVer1/${convertNumber(id)+1}`
      const navnextver2=`/projectDetailVer2/${convertNumber(id)+1}`
      if ( id==1 || id==4){
        navigate(navnextver1)
      }
      else if(id==2 || id==3){
        navigate(navnextver2)
      }
      else if(id==5){
        navigate(`/projectDetailVer1/${1}`)
      }
    }

    const navigateToprevious=(id)=>{
      const navpreviousver1=`/projectDetailVer1/${convertNumber(id)-1}`
      const navpreviousver2=`/projectDetailVer2/${convertNumber(id)-1}`
      if (id==3 || id==2 || id==6){
        navigate(navpreviousver1)
      }
      else if(id==4 || id==5){
        navigate(navpreviousver2)
      }
      else if(id==1){
        navigate(`/projectDetailVer2/${6}`)
      }
    }

    return(
        <div>
        <div className="ProjectDetailVer2-wrapper flex gap-7 pt-10 text-primary">
            <div className="w-1/2 res-full child res-px">
               <h3 className="text-gilroy-bold text-2xl">{DisplayProject.title}</h3>
               <p className="mt-5 text-poppins pr-9">{DisplayProject.description}</p>
               <div className="flex text-content gap-20 mt-8">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-gilroy-bold text-2xl ">Tool Used</h3>
                      <p className="text-poppins ">{DisplayProject.toolUsed}</p>
                    </div>
                    <div>
                      <h3 className="text-gilroy-bold text-2xl ">Project Type</h3>
                      <p className="text-poppins ">{DisplayProject.projectType}</p>
                    </div>
                  </div>
                  <div className="pr-9">
                    <h3 className="text-gilroy-bold text-2xl ">Role</h3>
                    <p className="text-poppins ">{DisplayProject.Role}</p>
                  </div>
               </div>
            </div>
            <div className="w-1/2 flex justify-end child res-full res-jus-center">

            <div className="w-10/12 ">
               <CustomSwiperVer2 imgList={DisplayProject.img}/>
            </div>
            </div>
        </div>
        <div className="mt-14 gap-5 flex flex-col switch res-gap-10 -res-mb-32">
               <hr className="line-hr "/>
               <div className="flex justify-between res-px">
                <h3 className="text-gilroy-bold text-2xl text-primary cursor-pointer" onClick={()=>{
                  handleNavigate("previous")
                }}>PREVIOUS PROJECT</h3>
                <h3 className="text-gilroy-bold text-2xl text-primary cursor-pointer" onClick={()=>{        
                  handleNavigate("next")
                }}
                  >NEXT PROJECT</h3>
               </div>
               <hr className="line-hr "/>
            </div>

        </div>
    )

}
export default ProjectDetailScreenVer2