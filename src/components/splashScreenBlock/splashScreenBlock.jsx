import { useEffect } from "react"
import './index.css'
const SplashScreenBlock=({img,id,top,bottom,left,right,size,zindex})=>{

    useEffect(()=>{
        const locationTop=top+"px"
        const locationBot=bottom+"px"
        const locationRight=right+"px"
        const locationLeft=left+"px"
        const SplashScreenBlock=document.getElementById(id)
        SplashScreenBlock.style.top=locationTop
        SplashScreenBlock.style.bottom=locationBot
        SplashScreenBlock.style.right=locationRight
        SplashScreenBlock.style.left=locationLeft



        const sizeImg=size+"px"
        const SplashScreenBlockImg=document.querySelector('.SplashScreenBlock-wrapper-img')
        SplashScreenBlockImg.style.size=sizeImg


    })
    
    return(
        <div className="SplashScreenBlock-wrapper absolute rounded-lg px-3 py-3 " id={id} >
            <img src={img} className="rounded-lg SplashScreenBlock-wrapper-img" alt=""/>
        </div>
    )
}
export default SplashScreenBlock