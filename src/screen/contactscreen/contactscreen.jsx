import React from "react";
import SmoothScroll from "smooth-scroll";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonBestia from "../../components/buttonBestia/ButtonBestia";
import "./index.css";

const ContactScreen = ({ width }) => {
  // Notify the user of successful submission
  const notifySuccess = () => toast.success("Submit successfully!");

  // Smooth scroll to the top of the page
  const slowScrollUp = () => {
    const scroll = new SmoothScroll("html", {
      speed: 300, // Scrolling speed in milliseconds
      speedAsDuration: true, // Interpret the speed as a duration
    });

    scroll.animateScroll(0); // Scroll to the top
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    notifySuccess(); // Show success toast
    slowScrollUp(); // Scroll to the top
  };

  return (
    <div className="Contactscreen-wrapper pt-10 res-pb">
      <h1 className="text-missing-love text-center text-secondary text-7xl">
        Let’s work together
      </h1>
      <h4 className="text-poppins text-center mt-5 text-primary">
        Feel free to leave me a message via the form, or you may reach me at
        lethaikimphuc@gmail.com.
        {width > 480 ? <br /> : null} Let’s create something beautiful and impactful.
      </h4>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-12 mt-10 res-flex">
          <div className="flex flex-col">
            <label className="text-poppins text-primary">Name</label>
            <input
              className="bg-thirdly px-2 py-2 rounded-sm mt-3"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-poppins text-primary">Email Address</label>
            <input
              className="bg-thirdly px-2 py-2 rounded-sm mt-3"
              type="email"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12 mt-10 res-flex">
          <div className="flex flex-col">
            <label className="text-poppins text-primary">Phone Number</label>
            <input
              className="bg-thirdly px-2 py-2 rounded-sm mt-3"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-poppins text-primary">What's this regarding?</label>
            <input
              className="bg-thirdly px-2 py-2 rounded-sm mt-3"
              type="text"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-poppins text-primary mt-10">Message</label>
          <textarea
            className="bg-thirdly px-2 py-10 rounded-sm mt-3"
            required
          ></textarea>
        </div>
        <div className="flex justify-center mt-14">
          <button type="submit" onClick={()=>{notifySuccess()}}>
            <ButtonBestia text={"Submit now"} />
          </button>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ContactScreen;
