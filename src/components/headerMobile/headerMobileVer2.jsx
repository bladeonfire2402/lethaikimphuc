import { useEffect, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import  './index.css'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

const HeaderMobileVer2=()=>{
    const [hidesideBar,sethidesideBar]=useState(true)

    const handleCloseSlideBar=()=>{}
    useEffect(()=>{
        
    },[hidesideBar])
    
    
   
    return(
        <div className="HeaderMobile px-5 py-4 flex justify-between items-center relative">
            <div className="absolute top-0">

            </div>
          
           <div className="rounded-full w-9 h-9 flex justify-center items-center bg-primary ">
            <img className="h-4" alt="" src={`${process.env.PUBLIC_URL}/assets/img/main/logo.png`}/>
           </div>
        </div>
    )
}
export default HeaderMobileVer2