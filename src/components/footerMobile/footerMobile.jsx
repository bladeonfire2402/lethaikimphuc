
import './index.css'
import { AccessPage } from '../../func/access'
import { useNavigate } from 'react-router-dom'

const FooterMobile=()=>{
  const navigate=useNavigate()
    return(
        <div className="FooterMobile-wrapper bg-primary py-14 flex flex-col  ">
            <div className="flex justify-center"><img alt="" src={`${process.env.PUBLIC_URL}/assets/img/main/whitelogo.png`}/></div>
            <div className="px-14 quicklink ">
                <h2 className="uppercase text-gilroy-bold text-white">Quick Link</h2>
                <div className='grid grid-cols-2 text-poppins text-white mt-11 gap-7 cursor-pointer'>
                    <nav onClick={()=>{navigate('/')}}>Home</nav>
                    <nav className='-ml-12 ' onClick={()=>{navigate('/project')}}>Projects</nav>
                    <nav  onClick={()=>{navigate('/service')}}>Services</nav>
                    <nav className='-ml-12'><a href='https://drive.google.com/file/d/1ZtQiVNLkP-peQv0uGlROVp7meuPvxXfD/view'>Portfolio</a></nav>
                    <nav onClick={()=>{navigate('/about')}}>About</nav>
                    <nav className='-ml-12' onClick={()=>{navigate('/contact')}}>Contact</nav>
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
                      <img className='w-14 h-14' src={`${process.env.PUBLIC_URL}/assets/img/social/Behance.png`} alt='behance' onClick={()=>{AccessPage("https://www.behance.net/lethaikimphuc")}}/>
                      <img className='w-14 h-14' src={`${process.env.PUBLIC_URL}/assets/img/social/Instagram.png`} alt='ins' onClick={()=>{AccessPage("https://www.instagram.com/ltkimp/")}}/>
                      <img className='w-14 h-14' src={`${process.env.PUBLIC_URL}/assets/img/social/facebook.png`} alt='fb'  onClick={()=>{AccessPage("https://www.facebook.com/lethaikimphuc/")}}/>
                </div>
            </div>
        </div>
    )

}
export default FooterMobile