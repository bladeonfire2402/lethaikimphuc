import { PrimaryButton } from "../button/primarybutton"

const LendIdeaToWorldSection=()=>{
    return(
        <div className="flex justify-between">
              <div className="w-1/2">
            <div className="w-10/12">
              <h1 className="text-secondary text-gilroy text-left ">Lend the ideas to the world</h1>
              <p className='text-primary text-poppins text-left mt-11 mb-5'>Hi, there! Kim Phuc is here! With over three years of experience as a graphic designer and illustrator, I'm eager to bring your ideas to life!</p>
              <div className='flex mt-14'>
                <PrimaryButton text={"More Details"}/>
              </div>
            </div>
            </div>
          <div className='w-1/2  bg-test-img'>
           
          </div>
        </div>
    )
}
export default LendIdeaToWorldSection