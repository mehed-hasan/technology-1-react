import WhiteBtn from '../../components/common/WhiteBtn';
import ServiceEl from '../../components/Service/ServiceEl';
import { heroBanner } from '../../data/service';

function ServiceBanner() {
    return ( 
        <>


<div className="service_banner text-center text-lg-start">
                <div className="container-fluid container-lg">
                    <div className="service_banner_top">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-8">
                                <div className="service_banner_left">
                                    <h2 dangerouslySetInnerHTML={{__html:heroBanner.title}} className="heading_2">
                                    </h2>
                                    <p className="mx-auto mx-lg-0">
                                      {heroBanner.desc}
                                    </p>
    
                                    <div style={{gap:'15px'}} className="btn_wrapper d-flex">
                                        <WhiteBtn link='/' />
                                        <a className="blue_btn" href="">Get started </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 float">
                                <img className="img-fluid" src={require(`../../images/banner/${heroBanner.image}`)} alt=""/>
                            </div>
                        </div>


                        <div className="awards">
                          <div className="row">
                            {
                              heroBanner.stat.map((item,index)=>
                              <ServiceEl key={index} data={item}/>
                              )
                            }
                          </div>
                        </div>
                    </div>

                    
                </div>
            </div>



  
        </>
     );
}

export default ServiceBanner;