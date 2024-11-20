import { useParams } from "react-router-dom";
import { ProjectData } from "../../assets/data/data";
import { CustomSwiperVer2 } from "../../components/customSwiper/customSwiperVer2";

const ProjectDetailScreenVer2=()=>{
    const { id } = useParams(); // Get the project ID from the route parameters
    const DisplayProject = ProjectData.find(project => project.id === parseInt(id)); // Parse id to a number if needed
    return(
        <div>
        <div className="flex gap-7 pt-10">
            <div className="w-1/2">
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
            <div className="w-1/2">
               <CustomSwiperVer2 imgList={DisplayProject.img}/>
            </div>
        </div>
        <div className="mt-14 gap-5 flex flex-col">
               <hr className="line-hr "/>
               <div className="flex justify-between">
                <h3 className="text-gilroy-bold text-2xl text-primary">PREVIOUS PROJECT</h3>
                <h3 className="text-gilroy-bold text-2xl text-primary">NEXT PROJECT</h3>
               </div>
               <hr className="line-hr "/>
            </div>

        </div>
    )

}
export default ProjectDetailScreenVer2