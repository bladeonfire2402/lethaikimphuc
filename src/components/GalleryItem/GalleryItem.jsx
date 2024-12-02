import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'

const GalleryItem = ({ Project }) => {
    const galleryItemRef = useRef(null); // Ref for the gallery item
    const descriptionRef = useRef(null); // Ref for the description div
    
    const navigate=useNavigate()

    useEffect(() => {
        const galleryItem = galleryItemRef.current;
        const description = descriptionRef.current;

        // Check if refs exist to avoid errors
        if (galleryItem && description) {
            const showDescription = () => description.classList.remove("hidden");
            const hideDescription = () => description.classList.add("hidden");

            galleryItem.addEventListener("mouseover", showDescription);
            galleryItem.addEventListener("mouseout", hideDescription);

            // Cleanup event listeners
            return () => {
                galleryItem.removeEventListener("mouseover", showDescription);
                galleryItem.removeEventListener("mouseout", hideDescription);
            };
        }
    }, []);

    const HandleNavigate=(id)=>{
        if(id===1){
            navigate(`/projectDetailVer1/${id}`)
        }
        else if(id===2){
            navigate(`/projectDetailVer1/${id}`)
        }
        else if(id===3){
            navigate(`/projectDetailVer2/${id}`)
        }
        else if(id===4){
            navigate(`/projectDetailVer2/${id}`)
        }
        else if(id===5){
            navigate(`/projectDetailVer1/${id}`)
        }
        else if(id===6){
            navigate(`/projectDetailVer2/${id}`)
        }
        
    }

    return (
        <div
            ref={galleryItemRef}
            className="relative gallery-items item-hover rounded-sm overflow-hidden"
            onClick={()=>{HandleNavigate(Project.id)}}
        >
            <img
                alt=""
                className="rounded-sm gallery-items w-full  object-fill  "
                src={Project.img[0]}
            />
            <div
                ref={descriptionRef}
                className="absolute cursor-pointer w-full h-full top-0 left-0 text-gilroy-bold text-white trans-test  flex justify-center text-2xl  items-center hidden"
            >
                {Project.title}
            </div>
        </div>
    );
};

export default GalleryItem;
