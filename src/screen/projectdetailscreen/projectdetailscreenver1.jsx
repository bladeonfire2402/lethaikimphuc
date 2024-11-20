import { useParams } from "react-router-dom";
import { ProjectData } from "../../assets/data/data";
import TwoItemAutoplaySwiper, { SwipperCustom } from "../../components/customSwiper/customSwiper";

const ProjectDetailScreenVer1 = () => {
    const { id } = useParams(); // Get the project ID from the route parameters
    const DisplayProject = ProjectData.find(project => project.id === parseInt(id)); // Parse id to a number if needed

    return (
        <div className="ProjectDetailVer1-wrapper">
            <h1>{DisplayProject.title}</h1>
            <p>{DisplayProject.description}</p>
            <SwipperCustom/>
            {/* Add more details as needed */}
        </div>
    );
};

export default ProjectDetailScreenVer1;
