import './index.css'

export const PrimaryButton=({text,func})=>{
    return(
        <button className="primary-btn px-11 py-3.5 border-2 border-primary  rounded-full text-primar text-xl text-gilroy-bold uppercase" onClick={func}>{text}</button>
    )
}