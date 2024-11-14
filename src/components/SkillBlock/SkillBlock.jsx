const SkillBlock=({item})=>{
    return(
        <div className="block-item flex flex-col items-center justify-center border-2 border-primary px-7 rounded-md">
            <img className="w-48 h-48" src={item.img} alt=""/>
            <h3 className="text-secondary text-gilroy-bold mt-10 mb-7  text-3xl">
            {item.title}
            </h3>
            <button className="text-white w-full py-4 font rounded-md bg-primary text-poppins font-semibold">See More</button>
        </div>
    )
}
export default SkillBlock