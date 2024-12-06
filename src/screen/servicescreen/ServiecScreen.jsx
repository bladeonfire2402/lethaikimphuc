import { ServiceData } from '../../assets/data/servicedata'
import ServiceBlock from '../../components/serviceBlock/ServiceBlock'
import './index.css'

const ServiceScreen=()=>{
    return(
        <div className="ServiceScreen-wrapper pt-24">
            <div className="flex flex-col justify-center Service-introduction items-center">
                <h1 className="text-gilroy-bold text-primary">Services</h1>
                <h3 className='text-center text-gilroy-bold text-primary '>Develop your passion project with eye catching branding, packaging, web design & illustrations.</h3>
            </div>
            <div className='service-content mt-24 flex flex-col gap-24'>
                {ServiceData.map((service,index)=>(
                    <ServiceBlock service={service} index={index}/>
                ))}
            </div>
            
        </div>
    )
}
export default ServiceScreen