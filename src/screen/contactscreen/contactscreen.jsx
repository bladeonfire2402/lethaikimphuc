import SmoothScroll from "smooth-scroll";
import { PrimaryButton } from "../../components/button/primarybutton"
import './index.css'
import ButtonBestia from "../../components/buttonBestia/ButtonBestia";

const ContactScreen=({witdh})=>{
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
        <div className="Contactscreen-wrapper pt-10 res-pb">
            <h1 className="text-missing-love text-center text-secondary text-7xl ">Let’s work together</h1>
            <h4 className="text-poppins text-center mt-5 text-primary">Feel free to leave me a message via the form, or you may reach me at lethaikimphuc@gmail.com. {witdh>480?<br/>:<></>} Lets create something beautiful and impactful.</h4>

            <form className="">
                <div className="grid grid-cols-2 gap-12 mt-10 res-flex">
                    <div className="flex flex-col">
                        <label className="text-poppins text-primary">Name</label>
                        <input className="bg-thirdly px-2 py-2 rounded-sm mt-3" type="text"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-poppins text-primary">Email Address</label>
                        <input className="bg-thirdly px-2 py-2 rounded-sm mt-3" type="email"/>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-12 mt-10 res-flex">
                    <div className="flex flex-col">
                        <label className="text-poppins text-primary">Phone Number</label>
                        <input className="bg-thirdly px-2 py-2 rounded-sm mt-3" type="text"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-poppins text-primary">What's this regarding?</label>
                        <input className="bg-thirdly px-2 py-2 rounded-sm mt-3" type="text"/>
                    </div>
                </div>
                <div className="flex flex-col">
                <label className="text-poppins text-primary mt-10">Message</label>
                <input className="bg-thirdly px-2 py-10 rounded-sm mt-3" type="text" />
                </div>
                <div className="flex justify-center mt-14">
                  <ButtonBestia text={"Submit now"}/>

                </div>

             
            </form>
        </div>
    )
}
export default ContactScreen