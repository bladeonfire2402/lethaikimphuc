
import { Link, useNavigate } from 'react-router-dom'
import './index.css'
import { useContext } from 'react'
import { serviceContext } from '../../App'
const Header=()=>{
    const {useserviceState}=useContext(serviceContext)
    const navigate=useNavigate()
    const handleNavigateToService=()=>{
        useserviceState("default")
        navigate('/service')
    }
 
    return(
        <div className="Header-wrapper flex justify-between text-gilroy-bold cursor-pointer text-2xl items-center mt-5 text-primary">
            <Link to={'/'}><nav>Home</nav></Link>
            <Link to={'/project'}><nav>Project</nav></Link>
            <nav onClick={()=>{handleNavigateToService()}}>Services</nav>
            <nav><img className='img-logo' src={`${process.env.PUBLIC_URL}/assets/img/main/logo.png`} alt="Home" /></nav>
            <nav><a href='https://drive.google.com/file/d/1ZtQiVNLkP-peQv0uGlROVp7meuPvxXfD/view'>Portfolio</a></nav>
            <Link to={'/about'}><nav>About</nav></Link>
            <Link to={'/contact'}><nav>Contact</nav></Link>
        </div>
    )
}
export default Header