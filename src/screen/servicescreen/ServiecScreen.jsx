import { useContext, useEffect } from 'react'
import { ServiceData } from '../../assets/data/servicedata'
import ServiceBlock from '../../components/serviceBlock/ServiceBlock'
import './index.css'
import { serviceContext } from '../../App'

const ServiceScreen=()=>{
    const {serviceState,useserviceState}=useContext(serviceContext)



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
    
    
    const ScrollFunc=(id)=>{
        window.location.href=`#${id}`
    }

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
            window.scrollTo({
                top: 0, // Cuộn đến đầu trang (Y = 0)
                behavior: 'smooth' // Thêm hiệu ứng cuộn mượt mà
              });

        }
        

    }

    useEffect(() => {
        ScrollToSection();
    }, [serviceState]);  // Gọi lại khi serviceState thay đổi
    
  
    
    return(
        <div className="ServiceScreen-wrapper pt-24">
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