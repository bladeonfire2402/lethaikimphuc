import { SkillAndExperienceData } from "../../assets/data/data"
import SkillBlock from "../SkillBlock/SkillBlock"

const SkillAndExperience=()=>{
    return(
        <div className="SkillAndExperience-wrapper mt-52">
            <h2 className="text-center text-primary text-5xl text-gilroy-bold">My Skills And Experience Will Help You</h2>
            <div className="flex justify-between mt-14">
                {SkillAndExperienceData.map((item,index)=>(
                    <div key={index}>
                        <SkillBlock item={item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SkillAndExperience