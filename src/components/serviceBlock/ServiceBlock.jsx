import './index.css'

const ServiceBlock=({service})=>{
    return(
        <div className="ServiceBlock-wrapper rounded-md border-2 px-14 py-8 text-gilroy-bold" id={service.title}>
            <h1 className='text-secondary'>{service.title}</h1>
            <h3 className='subtitle'>{service.subtitle}</h3>
            <p className='text-poppins mt-5 content'>{service.content}</p>
            <h4 className='text-xl'>Services:</h4>
            <ul className='list-disc mb-4 '>
            {service.services.map((service,index)=>(
                <li className='font-light text-poppins ml-5 mt-1  '>{service}</li>
            ))}
            </ul>
        </div>
    )
}
export default ServiceBlock