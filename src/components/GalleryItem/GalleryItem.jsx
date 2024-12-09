import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'

const GalleryItem = ({ Project, screenState, scrollLocation }) => {
    const galleryItemRef = useRef(null); // Ref for the gallery item
    const descriptionRef = useRef(null); // Ref for the description div
  
    const navigate=useNavigate()
    console.log(scrollLocation)

    useEffect(() => {
        const galleryItem = galleryItemRef.current;
        const description = descriptionRef.current;
        const galleryItemLocationBottom =  document.getElementById(Project.title).getBoundingClientRect().bottom-100;
        const galleryItemLocationTop =  document.getElementById(Project.title).getBoundingClientRect().top+100;


        console.log("Tạo độ top của phần tử " +  galleryItemLocationTop)
        console.log("Tạo độ bottom của phần tử " +  galleryItemLocationBottom)


        //Hàm xử lí các giao diện khi trong giao diện desktop
        const RenderGalleryItemForDesktop=()=>{
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
        }

        //Hàm xử lí các giao diện khi trong giao diện Mb
        const RenderGalleryItemForMb=()=>{
            if(scrollLocation<galleryItemLocationBottom && scrollLocation > galleryItemLocationTop){
                const showDescription = () => description.classList.remove("hidden");// Hàm Xóa class hidden, để hiện lớp
                showDescription()
            }
            else{
                const hideDescription = () => description.classList.add("hidden");
                hideDescription()
            }
        }

        const RenderGalleryItemForMbVer2=()=>{
            const showDescription = () => description.classList.remove("hidden");// Hàm Xóa class hidden, để hiện lớp
            showDescription()
        }

        //Hàm xử lí chung cho giao diện
        const HandleResponsiveFuncForGalleryItem=()=>{
            screenState > 480 ? RenderGalleryItemForDesktop() : RenderGalleryItemForMbVer2()
        }



        //Gọi hàm
        HandleResponsiveFuncForGalleryItem()
    },[screenState,scrollLocation] );

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
            navigate(`/projectDetailVer1/${id}`)
        }
        
    }

    return (
        <div
            ref={galleryItemRef}
            className="relative gallery-items item-hover rounded-md overflow-hidden"
            onClick={()=>{HandleNavigate(Project.id)}}
            id={Project.title}
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
