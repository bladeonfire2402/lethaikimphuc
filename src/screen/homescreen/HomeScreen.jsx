

import DiscussSection from '../../components/DiscussSection/DisscussSection'
import LendIdeaToWorldSection from '../../components/LendIdeasToworld/LendIdeasToWorld'
import RecentWork from '../../components/RecentWork/RecentWork'
import SkillAndExperience from '../../components/SkillsAndExperiment/SkillAndExperience'
import './index.css'

const HomeScreen = () =>{
  

    return(
        <div className="HomeScreen-wrapper pt-12 relative">
          <LendIdeaToWorldSection/>
          <SkillAndExperience/>
          <RecentWork/>
          <DiscussSection/> 
        </div>
    )
}
export default HomeScreen