import { useEffect, useState } from "react";
import { PrimaryButton } from "../button/primarybutton";
import './index.css';

const LendIdeaToWorldSection = () => {
    const [img, setImg] = useState(`${process.env.PUBLIC_URL}/assets/img/illustration/illustration1.png`);

    useEffect(() => {
        // Select the image element
        const imgPro = document.querySelector('.img-main-screen');

        // Define the event handlers
        const handleMouseOver = () => {
            setImg(`${process.env.PUBLIC_URL}/assets/img/illustration/illustration2.png`);
        };

        const handleMouseLeave = () => {
            setImg(`${process.env.PUBLIC_URL}/assets/img/illustration/illustration1.png`);
        };

        // Attach the event listeners
        if (imgPro) {
            imgPro.addEventListener('mouseover', handleMouseOver);
            imgPro.addEventListener('mouseleave', handleMouseLeave);
        }

        // Cleanup the event listeners on component unmount
        return () => {
            if (imgPro) {
                imgPro.removeEventListener('mouseover', handleMouseOver);
                imgPro.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []); // Empty dependency array ensures this runs once after the component mounts

    return (
        <div className="LendIdeaToWorld-wrapper flex gap-10 justify-between">
            <div className='w-7/12 res-7-12 '>
                <img className="-mt-11 img-main-screen" src={img} alt="" />
            </div>
            <div className="w-6/12 res-6-12">
                <div className="w-9/12 res-9-12">
                    <h1 className="text-secondary text-gilroy-bold text-left h1-responsive res-hidden">Lend the ideas to the world</h1>
                </div>
                <div className="flex flex-col items-center">
                    <p className='text-primary text-poppins text-left mt-11 mb-5 res-p'>
                        Hi, there! Kim Phuc is here! With over three years of experience as a graphic designer and illustrator, I'm eager to bring your ideas to life!
                    </p>
                    <div className='flex mt-14 btn-section'>
                        <PrimaryButton text={"More Details"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LendIdeaToWorldSection;
