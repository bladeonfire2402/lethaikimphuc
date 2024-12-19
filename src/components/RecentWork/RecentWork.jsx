
import { ProjectData } from '../../assets/data/data';
import './index.css'
import { useNavigate } from 'react-router-dom'

import RecentWorkItem from '../RecentWork-item/RecentWorkItem';


const RecentWork=()=>{
    const navigate = useNavigate()
    const Project1=ProjectData[0]
    const Project2=ProjectData[1]
    const Project3=ProjectData[2]
    const Project4=ProjectData[3]
    const Project5=ProjectData[4]
    const Project6=ProjectData[5]

    
    return(
        <div className="RecentWork-wrapper mt-20 ">
            <h2 className="text-gilroy-bold text-left text-5xl text-primary mb-16">Recent <br/> Work</h2>
            <div className='RecentWork-wrapper-content grid grid-cols-3 gap-8 res-flex'>
              <RecentWorkItem Project={Project1}/>
              <RecentWorkItem Project={Project2}/>
            
              <div className='res-hidden'>
              <RecentWorkItem Project={Project3}/>
              </div>
              <div className='res-hidden'>
              <RecentWorkItem Project={Project4}/>
              </div>

              <div className='res-hidden'>
              <RecentWorkItem Project={Project5}/>  
                </div>
                
              <div className='relative overflow-hidden rounded-sm project-six ' onClick={()=>{navigate('/project')}}>
                <img alt='' src={`${process.env.PUBLIC_URL}/assets/img/main/kim.png`} className='w-full rounded-sm object-fill'/>
                <div className='w-full h-full absolute top-0 right-0 bg-gray-700 special  '></div>
                <h3 className='absolute top-1/2 left-1/2 text-poppins text-white cursor-pointer text-lg' >See More</h3>
              </div>

            </div>
    
        </div>
    )
}
export default RecentWork