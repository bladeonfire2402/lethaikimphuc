import './index.css'

export const PrimaryButton=({text,func})=>{
    return(
        <button className="primary-btn px-11 py-3 border-2 border-primary  rounded-full text-primar text-xl font-gilroy font-bold uppercase" onClick={()=>{func()}}>{text}</button>
    )
}