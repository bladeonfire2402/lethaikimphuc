
import './index.css'
const Header=()=>{
    return(
        <div className="Header-wrapper flex justify-between text-gilroy-bold cursor-pointer text-3xl items-center mt-12 text-primary">
            <nav>Home</nav>
            <nav>Project</nav>
            <nav>Services</nav>
            <nav><img className='img-logo' src={`${process.env.PUBLIC_URL}/assets/img/main/logo.png`} alt="Home" /></nav>
            <nav>Portfolio</nav>
            <nav>About</nav>
            <nav>Contact</nav>
        </div>
    )
}
export default Header