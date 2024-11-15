import { ProjectData } from "../../assets/data/data"
import './index.css'
const GalleryLayout=()=>{
    return(
        <div className="GalleryLayout-wrapper grid pt-16">
            {ProjectData.map((item)=>(
                <div className=" grey-bg gallery-items rounded-sm" key={item.id}></div>
            ))}
        </div>
    )
}
export default GalleryLayout