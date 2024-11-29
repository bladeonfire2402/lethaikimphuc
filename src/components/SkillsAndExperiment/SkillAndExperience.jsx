import { SkillAndExperienceData } from "../../assets/data/data"
import SkillBlock from "../SkillBlock/SkillBlock"
import './index.css'

const SkillAndExperience=()=>{
    return(
        <div className="SkillAndExperience-wrapper mt-52">
            <h2 className="text-center text-primary text-5xl text-gilroy-bold res-h2">My Skills And Experience Will Help You</h2>
            <div className="flex gap-8 mt-14 flex-1 res-col">
                {SkillAndExperienceData.map((item,index)=>(
                    <div key={index} className="flex-1">
                        <SkillBlock item={item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SkillAndExperience