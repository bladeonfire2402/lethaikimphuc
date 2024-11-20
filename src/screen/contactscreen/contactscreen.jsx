const ContactScreen=()=>{
    return(
        <div className="Contactscreen-wrapper pt-10">
            <h1 className="text-missing-love text-center text-secondary text-7xl ">Let’s work together</h1>
            <h4 className="text-poppins text-center mt-5 text-primary">Feel free to leave me a message via the form, or you may reach me at lethaikimphuc@gmail.com <br/> Lets create something beautiful and impactful.</h4>

            <form>
                <div className="row-span-2">
                    <div className="flex flex-col">
                        <label className="text-poppins">Name</label>
                        <input type="text"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-poppins">Name</label>
                        <input type="text"/>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default ContactScreen