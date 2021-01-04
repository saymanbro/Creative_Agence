import React from 'react';
import './Service.css';
import {FcBrokenLink} from 'react-icons/fc';
import {FcLandscape} from 'react-icons/fc';
import {MdWeb} from 'react-icons/md';
const Service = () => {
    return (
        <section className='service_div container '> 
            <h1 className='service_heading text-center'>Provide Awesome 
             <span style={{color:'#7AB259'}}> Services</span>
             </h1>
                <div className="row mt-5 text-center justify-content-around">
                    <div className="col-md-4 service_box1">
                      <FcBrokenLink style={{fontSize:'50px', margin:'10px 0'}}/>
                      <h5>Web & Mobile design</h5>
                      <p>Lorem ipsum dolor, sit amet <br/> consectetur  adipisicing elit.<br/> Praesentium, aut!</p>
                    </div>
                    <div className="col-md-4   service_box2">
                    <FcLandscape style={{fontSize:'50px', margin:'10px 0px'}}/> 
                    <h5>Grapic design</h5>
                      <p>Lorem ipsum dolor, sit amet <br/>consectetur  adipisicing elit.<br/> Praesentium, aut!</p>
                    </div>
                    <div className="col-md-4 service_box3">
                     <MdWeb style={{fontSize:'50px', margin:'10px 0px ', color:'crimson'}}/> 
                    <h5>Web Development</h5>
                      <p>Lorem ipsum dolor, sit amet<br/> consectetur  adipisicing elit.<br/> Praesentium, aut!</p>
                    </div>
                </div>

        </section>
    );
}
export default Service;