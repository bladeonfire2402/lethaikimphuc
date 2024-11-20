
import { Link } from 'react-router-dom'
import './index.css'
const Header=()=>{
    return(
        <div className="Header-wrapper flex justify-between text-gilroy-bold cursor-pointer text-2xl items-center mt-5 text-primary">
            <Link to={'/'}><nav>Home</nav></Link>
            <Link to={'/project'}><nav>Project</nav></Link>
            <nav>Services</nav>
            <nav><img className='img-logo' src={`${process.env.PUBLIC_URL}/assets/img/main/logo.png`} alt="Home" /></nav>
            <nav>Portfolio</nav>
            <nav>About</nav>
            <Link to={'/contact'}><nav>Contact</nav></Link>
        </div>
    )
}
export default Header