import EastIcon from '@mui/icons-material/East';

const RecentWork=()=>{
    return(
        <div className="RecentWork-wrapper mt-44">
            <h2 className="text-gilroy-bold text-left text-6xl text-primary mb-16">Recent <br/> Work</h2>
            
           
               <div className="grid grid-cols-6 grid-rows-10 gap-5 h-800 ">
                 <div className="col-span-2 row-span-5 grey-bg rounded-sm"></div>
                 <div className="col-span-2 row-span-5 col-start-3 grey-bg rounded-sm"></div>
                 <div className="col-span-2 row-span-5 col-start-5 grey-bg rounded-sm"></div>
                 <div className="col-span-2 row-span-5 row-start-6 grey-bg rounded-sm"></div>
                 <div className="col-span-2 row-span-5 col-start-3 row-start-6 grey-bg rounded-sm"></div>
                <div className="col-span-2 row-span-5 col-start-5 row-start-6 grey-bg rounded-sm flex justify-center items-center">
                    <div className="text-white ">
                    <p className="text-poppins  text-white">See More</p>
                    <EastIcon/>
                    </div>
                </div>
               </div>
    
        </div>
    )
}
export default RecentWork