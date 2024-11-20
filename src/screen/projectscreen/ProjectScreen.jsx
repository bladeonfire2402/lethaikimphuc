
import GalleryLayout from '../../components/Gallery-Layout/Gallery-Layout'
import './index.css'



const ProjectScreen = () =>{
    return(
        <div className="ProjectScreen-wrapper pt-10">
            <h1 className="text-primary text-gilroy-bold text-center">My Notable <br/>Projects Handle</h1>
            <GalleryLayout/>
        </div>
    )
}
export default ProjectScreen