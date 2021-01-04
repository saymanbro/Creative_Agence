import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
            <section className='contact_div '>
               <div className="row container px-5">
                   <div className="col-md-7 my-5 ps-5 handle">
                      <h1 className='contact_heading'>Let Us handle your <br/> project, Professionally </h1>
                        <p className='mt-4 fw-lighter'>With well written codes, We build amazing app for all <br/> Platform.
                        Mobile and Web apps in general. </p>
                   </div>
                   <div className="col-md-5 my-5 ps-5 ">
                   <input className="form-control fw-lighter" type="text" placeholder="Your name/Company name" aria-label="default input example" />
                   <br/>
                   <input className="form-control fw-lighter" type="text" placeholder="Your Email" aria-label="default input example" />
                   <br/>
                   <input className="form-control h-100 fw-lighter" type="text" placeholder="Massage" aria-label="default input example" />
                   <br/>
                   <button className='send_btn fw-light'> Send </button>
                   </div>

               </div>

            </section>



       
    );
};

export default Contact;