import './index.css'

const FooterMobile=()=>{
    return(
        <div className="FooterMobile-wrapper bg-primary py-14 flex flex-col  ">
            <div className="flex justify-center"><img alt="" src={`${process.env.PUBLIC_URL}/assets/img/main/whitelogo.png`}/></div>
            <div className="px-14 quicklink ">
                <h2 className="uppercase text-gilroy-bold text-white">Quick Link</h2>
                <div className='grid grid-cols-2 text-poppins text-white mt-11 gap-7 '>
                    <nav>Home</nav>
                    <nav className='-ml-12'>Projects</nav>
                    <nav>Services</nav>
                    <nav className='-ml-12'>Portfolio</nav>
                    <nav>About</nav>
                    <nav className='-ml-12'>Contact</nav>
                </div>
            </div>
            <div className='Contacts px-14 mt-8'>
                 <h2 className="uppercase text-gilroy-bold text-white">Contacts</h2>
                 <div className='flex flex-col gap-7 text-poppins text-white mt-11'>
                    <p>Le Thai Kim Phuc</p>
                    <p>lethaikimphuc@gmail.com</p>
                    <p>HCMC, VietNam</p>
                 </div>
            </div>
            <div className='follow px-14 mt-8'>
            <h2 className="uppercase text-gilroy-bold text-white">Follow</h2>
               <div className="flex mt-6 gap-5">
                      <img className='w-14 h-14' src={`${process.env.PUBLIC_URL}/assets/img/social/Behance.png`} alt='behance'/>
                      <img className='w-14 h-14' src={`${process.env.PUBLIC_URL}/assets/img/social/Instagram.png`} alt='behance'/>
                      <img className='w-14 h-14' src={`${process.env.PUBLIC_URL}/assets/img/social/facebook.png`} alt='behance'/>
                </div>
            </div>
        </div>
    )

}
export default FooterMobile