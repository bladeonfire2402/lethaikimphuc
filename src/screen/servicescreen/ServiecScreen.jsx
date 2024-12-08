import { useContext, useEffect } from 'react'
import { ServiceData } from '../../assets/data/servicedata'
import ServiceBlock from '../../components/serviceBlock/ServiceBlock'
import './index.css'
import { serviceContext } from '../../App'
import SmoothScroll from 'smooth-scroll'

const ServiceScreen=()=>{
    const {serviceState,useserviceState}=useContext(serviceContext)

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
    



    const scrollTest = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Cuộn đến phần tử với khoảng cách 100px từ đỉnh
            window.scrollTo({
                top: element.offsetTop - 100,  // Trừ đi 100px từ vị trí phần tử
                behavior: 'smooth'
            });
        }
    };
    
    
    

    //Hàm để tùy chỉnh scrooll xuống phần nào
    const ScrollToSection=()=>{
        if(serviceState==="Illustration"){
            scrollTest("Illustration")
        }
        else if(serviceState ==="Brand"){
            scrollTest("Brand Identity")
            
        }
        else if(serviceState ==="Editorial"){
            scrollTest("Editorial Design")
            
        }
        else if(serviceState ==="default"){
            slowScrollUp()
        }
    
    }

    useEffect(() => {
        ScrollToSection();
    }, [serviceState]);  // Gọi lại khi serviceState thay đổi
    
  
    
    return(
        <div className="ServiceScreen-wrapper pt-24 pb-10">
            <div className="flex flex-col justify-center Service-introduction items-center">
                <h1 className="text-gilroy-bold text-primary">Services</h1>
                <h3 className='text-center text-gilroy-bold text-primary '>Develop your passion project with eye catching branding, packaging, web design & illustrations.</h3>
            </div>
            <div className='service-content mt-24 flex flex-col gap-20'>
                {ServiceData.map((service,index)=>(
                    <ServiceBlock service={service} index={index}/>
                ))}
            </div>
            
        </div>
    )
}
export default ServiceScreen