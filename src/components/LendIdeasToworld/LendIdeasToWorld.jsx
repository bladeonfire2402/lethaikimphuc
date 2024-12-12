
import { PrimaryButton } from "../button/primarybutton";
import './index.css';
import { useNavigate } from "react-router-dom";

import { CustomSwiperVer3 } from "../customSwiper/customSwiperVer3";
import ButtonBestia from "../buttonBestia/ButtonBestia";


const LendIdeaToWorldSection = () => {
    const navigate=useNavigate()

    const imgList=[`${process.env.PUBLIC_URL}/assets/img/illustration/illustration2.png`,`${process.env.PUBLIC_URL}/assets/img/illustration/illustration1.png`]

    return (
        <div className="LendIdeaToWorld-wrapper flex gap-10 justify-between">
            <div className='w-6/12 res-7-12 pr-2 '>
               <CustomSwiperVer3 imgList={imgList} time={50}/>
            </div>
            <div className="w-6/12 res-6-12">
                <div className="w-9/12 res-9-12">
                    <h1 className="text-secondary text-gilroy-bold text-left h1-responsive res-hidden">Lend the ideas to the world</h1>
                </div>
                <div className="flex flex-col res-items-center">
                    <p className='text-primary text-poppins text-left mt-11 mb-5 res-p'>
                        Hi, there! Kim Phuc is here! With over three years of experience as a graphic designer and illustrator, I'm eager to bring your ideas to life!
                    </p>
                    <div className='flex mt-8 btn-section' >
                        <ButtonBestia text={"More Details"} func={()=>{navigate('/about')}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LendIdeaToWorldSection;
