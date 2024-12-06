
import { useContext } from 'react'
import DiscussSection from '../../components/DiscussSection/DisscussSection'
import LendIdeaToWorldSection from '../../components/LendIdeasToworld/LendIdeasToWorld'
import RecentWork from '../../components/RecentWork/RecentWork'
import SkillAndExperience from '../../components/SkillsAndExperiment/SkillAndExperience'
import './index.css'
import { serviceContext } from '../../App'

const HomeScreen = () =>{
    const {serviceState}=useContext(serviceContext)
    console.log(serviceState)
    return(
        <div className="HomeScreen-wrapper pt-12 ">
          <LendIdeaToWorldSection/>
          <SkillAndExperience/>
          <RecentWork/>
          <DiscussSection/>
        </div>
    )
}
export default HomeScreen