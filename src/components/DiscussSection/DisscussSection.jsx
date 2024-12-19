import SecondaryButton from "../button/secondaybutton"
import ButtonBestia from "../buttonBestia/ButtonBestia"
import ButtonMore from "../buttonBestia/ButtonMore"
import './index.css'
const DiscussSection=()=>{
    return(
        <div className="DiscussSection-wrapper bg-primary h-96 mt-48 rounded-3xl flex flex-col justify-center items-center">
            <h2 className="uppercase text-white text-gilroy-bold text-5xl">Have a project in mind ?</h2>
            <h4 className="text-white text-gilroy-bold mt-5 mb-10 text-3xl">Lets have a discussion !</h4>
            <ButtonMore label={"More Details"}/>
        </div>
    )
}
export default DiscussSection