import { ProjectData } from "../../assets/data/data"
import './index.css'
import GallerryItem from "../GalleryItem/GalleryItem";
import { useEffect, useState } from "react";

const GalleryLayout=()=>{
    const [screenState,usescreenState]=useState(window.innerWidth)
    const [screenheight,setscreenheight]=useState(window.innerHeight)
    const [state,setState]=useState(window.scrollY || document.documentElement.scrollTop)

    
    useEffect(()=>{
        const handleResize = () => {
            usescreenState(window.innerWidth);
            setscreenheight(window.innerHeight)
          };

        const handleScroll = () =>{
            let scrollLocation
            scrollLocation = window.scrollY || document.documentElement.scrollTop;
            setState(scrollLocation)
        }
         
        
        //Cài event sự kiện cho 2 hàm handleScroll và handleResize
        window.addEventListener('scroll', handleScroll);
        window.addEventListener("resize", handleResize);
    
    },[screenState,screenheight])

    const Project1=ProjectData[0]
    const Project2=ProjectData[1]
    const Project3=ProjectData[2]
    const Project4=ProjectData[3]
    const Project5=ProjectData[4]
    const Project6=ProjectData[5]

    return(
        <div className="GalleryLayout-wrapper relative mb-32 grid pt-16 res-flex">
            <GallerryItem Project={Project1} screenState={screenState} scrollLocation={state}/>
            <GallerryItem Project={Project2} screenState={screenState} scrollLocation={state}/>
            <GallerryItem Project={Project3} screenState={screenState} scrollLocation={state}/>
            <GallerryItem Project={Project4} screenState={screenState} scrollLocation={state}/>
            <GallerryItem Project={Project5} screenState={screenState} scrollLocation={state}/>
            <GallerryItem Project={Project6} screenState={screenState} scrollLocation={state}/>
        </div>
    )
}
export default GalleryLayout