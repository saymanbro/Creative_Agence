import React from 'react';
import './header.css';
import Service from '../Service/Service.jsx';
import Project from '../Demo_Project/Project.jsx';
import FeedBack_mail from '../FeedBack_mail/FeedBack_mail.jsx';
import Contact from '../Contact_form/Contact';
import agency from '../../images/logos/Frame.png';
import logo from '../../images/logos/logo.png';
import brand_1 from '../../images/logos/airbnb.png';
import brand_2 from '../../images/logos/google.png';
import brand_3 from '../../images/logos/netflix.png';
import brand_4 from '../../images/logos/slack.png';
import brand_5 from '../../images/logos/uber.png';
import { Link } from 'react-router-dom';


const MainHeader = () => {
 
    return (
      <>
        <div className="main_header">
        <div className='container mt-3'>
            <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logo} className="w-50" alt="brand_logo"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end mr-5 " id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item active">
       
         <a class="nav-link active" aria-current="page" href="#">Home</a>
    
        </li>
        <li class="nav-item">
       
        <a class="nav-link" href="#">Services</a>
     
        </li>
        <li class="nav-item">
      
         <a class="nav-link" href="#">Our Team</a>
   
        </li>
        <li class="nav-item">
     
       <a class="nav-link" href="#">Contact Us</a>
 
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>

                            {/* Heading and img */}

                            <div className="row heading mt-4 px-5 d-flex align-items-center">
                                <div className="col-md-6 mt-5">
                                    <h1 className='mx-5'>Let's Grow Your <br/> 
                                        Brand To The <br/>
                                        Next Level
                                     </h1>
                                     <p className=' mx-5'>
                                       Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Earum veniam hic aperiam velit alias vel ipsam <br/>  fuga debitis, repudiandae odio.
                                     </p>
                                     <button className="hire_btn mx-5">
                                       Hire Us
                                     </button>
                                </div>
                                <div className="col-md-6">
                                    <img src={agency} className='img-fluid rounded w-100 pl-3 ' alt="heading_img"/>
                                </div>
                            </div> 
        </div>
        <section className='container brand_div'>
          <div className="row align-items-center">
            <div className="col-md-2 mx-2">
            <img src={brand_1} className='img-fluid brand' alt=""/>
            </div>
            <div className="col-md-2 mx-2">
            <img src={brand_2} className='img-fluid brand' alt=""/>
              </div>
              <div className="col-md-2 mx-2">
              <img src={brand_3} className='img-fluid brand' alt=""/>
              </div>
              <div className="col-md-2 mx-2">
              <img src={brand_4} className='img-fluid brand' alt=""/>
              </div>
              <div className="col-md-2 mx-2">
              <img src={brand_5} className='img-fluid brand' alt=""/>
              </div>
          </div>
        </section>


      <Service/>
      <Project/>
      <FeedBack_mail/>
      <Contact/>

          </>
    );
};

export default MainHeader;