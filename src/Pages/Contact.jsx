import React from 'react'
import '../../src/index.css'
import '../Styles/Contact.css'
import { SiMinutemailer } from "react-icons/si";
import {  FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaPaperPlane} from "react-icons/fa";
const Contact = () => {
  return (
   <section className='px-6 md:px-10 lg:px-14 py-12 md:py-18 card-block mt-0 lg:mt-6 rounded-0 lg:rounded-b-3xl'>
       <h2 className="text-2xl md:text-3xl font-semibold mb-8 inline-flex items-center gap-2">
         <SiMinutemailer/>Contact
        </h2>
        

    
      <h2 className=" text-3xl md:text-3xl font-semibold leading-tight">
        Let's Get in Touch!
      </h2>

   
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        
  
        <div className="glass-contact-card">
          <div className="flex items-center gap-4">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <h4 className="text-sm md:text-base font-medium mt-1">
                +91 7094025396
              </h4>
            </div>
          </div>
        </div>

      
        <div className="glass-contact-card">
          <div className="flex items-center gap-4">
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <p className="text-sm text-gray-400">Email</p>
              <h4 className="text-sm md:text-base font-medium mt-1 break-all">
                vivek1679772@gmail.com
              </h4>
            </div>
          </div>
        </div>

       
        <div className="glass-contact-card md:col-span-2">
          <div className="flex items-center gap-4">
            <div className="contact-icon">
              <FaMapMarkedAlt />
            </div>

            <div>
              <p className="text-sm text-gray-400">Address</p>
              <h4 className="text-sm md:text-base font-medium mt-1">
                Melmoil, Vellore, Tamil Nadu, India.
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="mt-10 overflow-hidden rounded-3xl border border-gray-800">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Vellore&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[200px] md:h-[300px]"
          loading="lazy"
        />


      </div>

      {/* FORM */}
      <div className="mt-14">
        <h3 className="text-2xl md:text-4xl font-semibold">
          Let’s make your project brilliant!
        </h3>

        <form className="mt-8 flex flex-col gap-5">
          
          {/* INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="text"  placeholder="Full Name" className="contact-input"
            />

            <input type="email" placeholder="Email Address" className="contact-input" />
          </div>

          {/* TEXTAREA */}
          <textarea rows="3"  placeholder="Your Message" className="contact-input resize-none" ></textarea>

     
          <button className="contact-btn inline-flex align-items-center">
            SEND MESSAGE <SiMinutemailer className='mt-1 ms-2 text-xl'/>
          </button>
        </form>
      </div>
    </section> 
  )
}

export default Contact