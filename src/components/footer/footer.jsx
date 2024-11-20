import './index.css'

const Footer=()=>{
    return(
        <div className="Footer-wrapper mt-24 bg-primary w-full h-80 flex justify-center py-16">
            <div className="wrapper flex gap-2">
                <div className="w-5/12">
                <img className="img-logo" src={`${process.env.PUBLIC_URL}/assets/img/main/white-logo.png`} alt=""/>
                </div>

                <div className="w-8/12 flex justify-between">
                  <div>
                    <h2 className="text-white text-gilroy-bold text-3xl uppercase ">Quick Link</h2>
                    <div className="flex flex-col text-sm gap mt-6 ">
                    <p className="text-white text-poppins text-left font-light">Home</p>
                    <p className="text-white text-poppins text-left font-light">Projects</p>
                    <p className="text-white text-poppins text-left font-light">Services</p>
                    <p className="text-white text-poppins text-left font-light">Portfolio</p>
                    <p className="text-white text-poppins text-left font-light">About</p>
                    <p className="text-white text-poppins text-left font-light">Contact</p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-white text-gilroy-bold text-3xl uppercase text-left ">Contact</h2>
                    <div className="flex flex-col text-sm gap mt-6 ">
                    <p className="text-white text-poppins text-left font-light">Le Thai Kim Phuc</p>
                    <p className="text-white text-poppins text-left font-light">+84 901735690</p>
                    <p className="text-white text-poppins text-left font-light">HCMC, Vietnam</p>
                    <p className="text-white text-poppins text-left font-light">lethaikimphuc@gmail.com</p>
                    </div>
                  </div>
                  <div className='text-left'>
                    <h2 className="text-white text-gilroy-bold text-3xl uppercase text-left ">Follow</h2>
                    <div className="flex mt-6 gap-5">
                      <img className='w-14 h-14' src={`${process.env.PUBLIC_URL}/assets/img/social/Behance.png`} alt='behance'/>
                      <img className='w-14 h-14' src={`${process.env.PUBLIC_URL}/assets/img/social/Instagram.png`} alt='behance'/>
                      <img className='w-14 h-14' src={`${process.env.PUBLIC_URL}/assets/img/social/facebook.png`} alt='behance'/>

                 
                    </div>
                  </div>
                </div>

            </div>
        </div>
    )
}
export default Footer