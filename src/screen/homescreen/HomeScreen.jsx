
import LendIdeaToWorldSection from '../../components/LendIdeasToworld/LendIdeasToWorld'
import SkillAndExperience from '../../components/SkillsAndExperiment/SkillAndExperience'
import './index.css'

const HomeScreen = () =>{
    return(
        <div className="HomeScreen-wrapper  pt-28 ">
          <LendIdeaToWorldSection/>
          <SkillAndExperience/>
        </div>
    )
}
export default HomeScreen