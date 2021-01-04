import React from 'react';
import './Project.css';
import slide_1 from '../../images/carousel-1.png';
import slide_2 from '../../images/carousel-2.png';
import slide_3 from '../../images/carousel-4.png';

const Project = () => {
    return (
        <section className="project_container">
            <div className='container '>
          <h2 className='text-white text-center pt-5'>Here are some of   <span style={{color:'#7AB259', fontWeight:'bold'}} >Our Works</span></h2>

                {/* Carousal ++++++ Slide images */}

                <div id="carouselExampleInterval" className="carousel slide py-5 " data-bs-ride="carousel">
                    <div className="carousel-inner ">
                        <div className="carousel-item active text-center" data-bs-interval="10000">
                        <img src={slide_1} className="d-block " alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                        <img src={slide_2} className="d-block " alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img  src={slide_3}className="d-block " alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                    </div>


        </div>
        </section>
    );
};

export default Project;