import { useParams } from "react-router-dom";
import { ProjectData } from "../../assets/data/data";
import  { CustomSwiper } from "../../components/customSwiper/customSwiper";
import './index.css'

const ProjectDetailScreenVer1 = () => {
    const { id } = useParams(); // Get the project ID from the route parameters
    const DisplayProject = ProjectData.find(project => project.id === parseInt(id)); // Parse id to a number if needed
    const width=window.innerWidth;

    return (
        <div className="ProjectDetailVer1-wrapper pt-10">
            <div className="mt-3">
            <CustomSwiper imgList={DisplayProject.img.slice(1)} width={width}/>
            <div className="mt-11 flex justify-between gap-20 text-primary res-flex res-p res-gap">
                <div className="w-1/2 flex flex-col items-start res-full res-mt">
                   <h3 className="text-gilroy-bold text-2xl text-primary">{DisplayProject.title}</h3>
                   <p className="text-poppins font-light text-left">{DisplayProject.description}</p>
                </div>

                <div className="w-1/2 flex justify-between res-full res-flex res-gap">
                   <div className="text-left res-full">
                   <h3 className="text-gilroy-bold text-2xl text-primary a">Role</h3>
                   <p className="text-poppins font-light text-left res-text-center">{DisplayProject.Role}</p>
                   </div>

                   <div className="flex flex-col gap-6">
                    <div className="text-left">
                        <h3 className="text-gilroy-bold text-2xl text-primary">Tools Used</h3>
                        <p className="text-poppins font-light text-left res-text-center">{DisplayProject.toolUsed}</p>
                    </div>
                    <div className="text-left">
                        <h3 className="text-gilroy-bold text-2xl text-primary">Project Type</h3>
                        <p className="text-poppins font-light text-left res-text-center">{DisplayProject.projectType}</p>
                    </div>
                   </div>
                   
                </div>

            </div>
            {DisplayProject.id===5 ? <div className="mt-16">
                <img src={DisplayProject.img[2]} className="w-full"  alt=""/>
            </div> : <div></div>}
            </div>
            <div className="mt-14 gap-5 flex flex-col switch res-gap-10 -res-mB-32 ">
               <hr className="line-hr "/>
               <div className="flex justify-between res-px">
                <h3 className="text-gilroy-bold text-2xl text-primary">PREVIOUS PROJECT</h3>
                <h3 className="text-gilroy-bold text-2xl text-primary">NEXT PROJECT</h3>
               </div>
               <hr className="line-hr "/>
            </div>
        </div>
    );
};

export default ProjectDetailScreenVer1;
