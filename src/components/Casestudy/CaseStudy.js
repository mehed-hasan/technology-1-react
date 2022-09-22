import { Link } from "react-router-dom";

function CaseStudy({data}) {
    return ( 
        <>
        <div className="col-12 col-md-6 col-lg-4">
                              <div className="card2 p-md-2 p-lg-4 d-flex flex-column gap-3">
                                  <div className="card2_img">
                                      <Link to={`/casestudy/details/${data.id}/${data.cat}/${data.title}`} href="case_study_details.html"><img className="img-fluid" src={`${require(`../../images/banner/${data.thumbnail}`)}`} alt=""/></Link>
                                  </div>
          
                                  <div className="card2_posted_info d-flex justify-content-between">
                                      <div className="badge bg-dark">{data.cat}</div>
                                      <div className="date">{data.date}</div>
                                  </div>
          
                                  <div className="card2_heading">
                                     <h2 > <Link to={`/casestudy/details/${data.id}/${data.cat}/${data.title}`} href="">{data.title}</Link></h2>
                                  </div>
          
                                  <p>
                                    {data.shortDesc}
                                  </p>
          
                                  <Link to={`/casestudy/details/${data.id}/${data.cat}/${data.title}`} href="case_study_details.html">Read More
                                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M6 18L18 6" stroke="#FF3468" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M8.25 6H18V15.75" stroke="#FF3468" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                          
                                          
                                  </Link>
                              </div>
                          </div>
        </>
     );
}

export default CaseStudy;