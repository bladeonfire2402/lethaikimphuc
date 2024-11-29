import './index.css'

const SkillBlock=({item})=>{
    return(
        <div className="block-item flex-1 flex flex-col items-center justify-center border-2 border-primary px-7 rounded-md">
            <img className="w-40 h-40 res-img" src={item.img} alt=""/>
            <h3 className="text-secondary text-gilroy-bold mt-10 mb-7  text-2xl">
            {item.title}
            </h3>
            <button className="text-white w-full py-4 font rounded-md bg-primary text-poppins font-semibold">See More</button>
        </div>
    )
}
export default SkillBlock