import React from 'react';
import './FeedBack.css';
import client_1 from '../../images/customer-1.png';
import client_2 from '../../images/customer-2.png';
import client_3 from '../../images/customer-3.png';

const FeedBack_mail = () => {
    return (
        <section>
            <div className="customer_div  ">
                <h1 className="text-center">
                    Clients <span style={{color:'#7AB259'}}>FeedBack</span>
                </h1>
                  <div className="row mt-5">
                        
                 <div className="col-md-4 text-center client_1 py-2">
                        <div style={{marginLeft:'40px'}}>
                            
                   <table >
                       <tr>
                           <td>
                           <img src={client_1}  className='ms-2' alt=""/>
                           </td>
                           <td>
                            
                      <strong>  <h6>William Son</h6>
                      <span>CEO Monpol</span></strong>
                           </td>
                       </tr>
                   </table>  
                        </div>
                   <p className='my-3'>Lorem ipsum dolor sit amet <br/> adipisicing elit. Possimus, quos!</p>
                  </div>
                 
               
                <div className="col-md-4 text-center client_2 py-2 ">
                <div style={{marginLeft:'40px'}}>
                    <table >
                        <tr>
                            <td>
                            <img src={client_2} className='ps-2' alt=""/>
                            </td>
                            <td>
                            <strong>William Son</strong>
                            <h6>CEO Monpol</h6>
                            </td>
                        </tr>
                    </table >
                  </div>
                  <p className='my-3'>Lorem ipsum dolor sit amet <br/> adipisicing elit. Possimus, quos!</p>
                </div>
               <div className="col-md-4 text-center client_3 py-2 ">
               <div style={{marginLeft:'40px'}} className=''>
                      <table >
                          <tr>
                              <td>
                              <img src={client_3} alt=""/>
                              </td>
                              <td>
                              <strong>William Son</strong>
                             <h6>CEO Monpol</h6>
                              </td>
                          </tr>
                      </table>
                  </div>
                  <p className='my-3'>Lorem ipsum dolor sit amet <br/> adipisicing elit. Possimus, quos!</p>
              </div>
                  </div>
                 </div>
            

          

      </section>

    );
};

export default FeedBack_mail;