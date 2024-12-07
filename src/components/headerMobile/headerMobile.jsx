import { useEffect, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import  './index.css'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

const HeaderMobile=()=>{
    const [hidesideBar,sethidesideBar]=useState(true)

    const handleCloseSlideBar=()=>{}
    useEffect(()=>{
        
    },[hidesideBar])
    
    
   
    return(
        <div className="HeaderMobile px-5 py-4 flex justify-between items-center relative">
            {hidesideBar===true? 
             <div className="" onClick={()=>{sethidesideBar(false)}}>
               <MenuIcon fontSize="large"/>
            </div>
            :
            <div className="side-bar z-50 fixed px-3 py-3 text-gilroy-bold flex flex-col gap-6 bg-primary ">  
            <div className="-mb-3 "  onClick={()=>{sethidesideBar(true)}}>
                <CloseIcon fontSize="large"/>
            </div>
             <Link to={'/'} ><nav className="apeared" onClick={()=>{sethidesideBar(true)}}>Home</nav></Link>
        
            <Link to={'/project'}><nav className="apeared" >Project</nav></Link>
            <nav className="apeared">Services</nav>
            <nav className="apeared"><a href='https://drive.google.com/file/d/1ZtQiVNLkP-peQv0uGlROVp7meuPvxXfD/view'>Portfolio</a></nav>
            <Link to={'/about'}><nav className="apeared">About</nav></Link>
            <Link to={'/contact'}><nav className="apeared">Contact</nav></Link>
            </div>
            }
          
           <div className="rounded-full w-9 h-9 flex justify-center items-center bg-primary">
           <img className="h-4" alt="" src={`${process.env.PUBLIC_URL}/assets/img/main/logo.png`}/>
           </div>
        </div>
    )
}
export default HeaderMobile