import { ProjectData } from "../../assets/data/data"
import { useNavigate,useState  } from 'react-router-dom';
import './index.css'
import GallerryItem from "../GalleryItem/GalleryItem";

const GalleryLayout=()=>{
    const Project1=ProjectData[0]
    const Project2=ProjectData[1]
    const Project3=ProjectData[2]
    const Project4=ProjectData[3]
    const Project5=ProjectData[4]
    const Project6=ProjectData[5]

    return(
        <div className="GalleryLayout-wrapper mb-32 grid pt-16 res-flex">
            <GallerryItem Project={Project1}/>
            <GallerryItem Project={Project2}/>
            <GallerryItem Project={Project3}/>
            <GallerryItem Project={Project4}/>
            <GallerryItem Project={Project5}/>
            <GallerryItem Project={Project6}/>
        </div>
    )
}
export default GalleryLayout