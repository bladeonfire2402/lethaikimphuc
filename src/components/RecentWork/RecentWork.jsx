import EastIcon from '@mui/icons-material/East';
import { ProjectData } from '../../assets/data/data';
import './index.css'

const RecentWork=()=>{
    const Project1=ProjectData[0]
    const Project2=ProjectData[1]
    const Project3=ProjectData[2]
    const Project4=ProjectData[3]
    const Project5=ProjectData[4]
    const Project6=ProjectData[5]
    return(
        <div className="RecentWork-wrapper mt-20">
            <h2 className="text-gilroy-bold text-left text-5xl text-primary mb-16">Recent <br/> Work</h2>
        
               <div className="grid grid-cols-6 grid-rows-10 gap-5 res-flex">
                 <div className="col-span-2 row-span-5 grey-bg rounded-sm"><img className='h-max' src={Project1.img[0]}/></div>
                 <div className="col-span-2 row-span-5 col-start-3 grey-bg rounded-sm"><img className='' src={Project2.img[0]}/></div>
                 <div className="col-span-2 row-span-5 col-start-5 grey-bg rounded-sm"><img className='' src={Project3.img[0]}/></div>
                 <div className="col-span-2 row-span-5 row-start-6 grey-bg rounded-sm res-hidden"><img className='' src={Project4.img[0]}/></div>
                 <div className="col-span-2 row-span-5 col-start-3 row-start-6 grey-bg rounded-sm res-hidden"><img className='' src={Project5.img[0]}/></div>
                <div className="col-span-2 row-span-5 col-start-5 row-start-6 grey-bg rounded-sm flex justify-center items-center res-hidden">
                <img className='' src={Project6.img[0]}/>
                </div>
               </div>
    
        </div>
    )
}
export default RecentWork