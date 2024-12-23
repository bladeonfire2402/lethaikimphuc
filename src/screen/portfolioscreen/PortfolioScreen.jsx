import './index.css'
import SmoothScroll from 'smooth-scroll';

const PortfolioScreen=()=>{
    const slowScrollUp = () => {
      // Khởi tạo đối tượng SmoothScroll
      const scroll = new SmoothScroll('html', {
        speed: 300, // Tốc độ cuộn (300ms)
        speedAsDuration: true // Cài đặt tốc độ cuộn theo thời gian
      });
    
      // Cuộn lên đầu trang
      scroll.animateScroll(0); // Cuộn đến vị trí 0 (đầu trang)
    };
    
    // Sử dụng hàm slowScrollUp
    slowScrollUp();
    

    return(
        <div className="Portfolio-wrapper pt-12" id='Portfolio-wrapper'>
            <div className="flex justify-between gap-5 items-center px-5 first-info">
               <div className="w-1/2 flex justify-end res-full"><img className="w-12/12" src={`${process.env.PUBLIC_URL}/assets/img/main/porto.png`} alt="Le Thai Kim Phuc"/></div>
               <div className="w-1/2 res-full">
                  <h1 className="text-missing-love text-secondary text-7xl mb-10 res-center">Le Thai Kim Phuc</h1>
                  <p className="text-poppins mb-5 text-primary res-justify" >I’m a 20 y/o graphic designer based in HCM City, Vietnam.</p>  
                  <p className="text-poppins  text-primary res-justify">Major in illustration, editorial design. When it come to art, I love trying out new styles, my current obsession is fun and bright art! I watched numerous cartoons and admired wonderfully designed books as a child, which led me to become a designer and artist. I am an independent and detailoriented designer who enjoys working in teams. </p>
               </div>    
            </div>

            <div className="grid  grid-cols-2 gap-4 mt-16 res-mt-10 text-primary res-flex margin-bottom">
                <div className="">
                    <h1 className="text-gilroy-bold text-3xl mb-5">Education</h1>
                    <p className="text-poppins">(2021 - Now) <strong> University of Greenwich Vietnam</strong></p>
                    <ul className="text-poppins text-primary list-disc">
                        <li className="list-disc ml-5">Graphic Designer Major</li>
                        <li className="list-disc ml-5">Top student of Summer semester</li>

                    </ul>

                    <p className="text-poppins mt-5">(2022 - 2023) Comic Media Academy</p>
                    <ul className="text-poppins text-primary list-disc">
                        <li className="list-disc ml-5">Digital painting - Character design</li>
                        <li className="list-disc ml-5">Digital painting - Illustration </li>
                    </ul>

                </div>
                <div className="">
                <h1 className="text-gilroy-bold text-3xl mb-5 res-mt-10 {">Experience</h1>
                    <p className="text-poppins text-primary res-justify">Illustrator artist at Phuong Nam Printing Joint Stock Co.</p>
                    <p className="text-poppins text-primary mt-5 font-semibold mb-2">Personal project:</p>
                    <p className="text-poppins text-primary res-justify">Worked on over 50 artworks and booking projects, Of which 90% were scored Distinction and satisfaction
                    Guided the group's model-making project, which was shown and scored highest.</p>

                </div>
            </div>

            <div className="grid grid-cols-2 mt-16 gap-16 text-primary res-flex res-mt-10 res-mt-10 res-hidden">
                <div>
                   <h1 className="text-gilroy-bold text-3xl mb-5">Software Skills</h1>
                   <p className="text-poppins text-primary">Programs I can use proficiently:</p>
                   <img className="mt-5 software-img" src={`${process.env.PUBLIC_URL}/assets/img/main/port-program.png`} alt=""/>
                </div>
                <div>
                   <h1 className="text-gilroy-bold text-3xl mb-5">Keywords</h1>
                   <p className="text-poppins text-primary mt-12"></p>
                   <img className=" mt-5 keyword-img " src={`${process.env.PUBLIC_URL}/assets/img/main/port-key.png`} alt=""/>
                </div>
            </div>

            
        </div>
    )
}
export default PortfolioScreen