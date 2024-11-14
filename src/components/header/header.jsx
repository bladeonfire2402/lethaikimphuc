

const Header=()=>{
    return(
        <div className="Header-wrapper flex justify-between text-gilroy text-2xl items-center mt-10 text-primary">
            <nav>Home</nav>
            <nav>Project</nav>
            <nav>Services</nav>
            <nav><img className='w-32 h-24' src={`${process.env.PUBLIC_URL}/assets/img/main/logo.png`} alt="Home" /></nav>
            <nav>Portfolio</nav>
            <nav>About</nav>
            <nav>Contact</nav>
        </div>
    )
}
export default Header