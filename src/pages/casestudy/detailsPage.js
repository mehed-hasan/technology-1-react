import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cases } from '../../data/casestudy';
import '../../css/case_details.css';
import CaseStudy from '../../components/Casestudy/CaseStudy';
import {pageTitle} from '../../hooks/title.js';



function DetailsPage() {


    
    window.scrollTo(0,0);
    const {id,title,cat} = useParams();
    const getData = cases.case.find((item)=> {return id == item.id});
    const relatedBlog = cases.case.filter((item)=> {return  cat === item.cat})

    pageTitle(title);


    return ( 
        <>
     <div className="gap_64"></div>
        <div className="container">
            <section className="blue_bg" style={{backgroundImage:`url(${require('../../images/banner/blue_bg.png')})`}}>
                <div className="bread_cum">
                    <div>
                        <a href="case_study.html">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17" cy="17" r="17" fill="white" fillOpacity="0.1"/>
                                <path d="M20.41 12.41L19 11L13 17L19 23L20.41 21.59L15.83 17L20.41 12.41Z" fill="white"/>
                                </svg>
                        </a>
                    </div>

                    <div className="post_info">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">{getData.cat}</li>
                            <li className="list-group-item">{getData.date} </li>
                          </ul>
                    </div>
                </div>

                <div className="banner_text">
                    <h2>
                        {getData.title}
                    </h2>
                </div>
            </section>

            <section className="blog_image mt-3">
                <img  className="img-fluid w-100" src={ getData.previewImage === '' ? `${require(`../../images/banner/img-placeholder.png`)}`:`${require(`../../images/banner/${getData.previewImage}`)}`} alt=""/>
            </section>


            <section dangerouslySetInnerHTML={{__html:getData.desc}} className="blog_text para">
                
            </section>


            <section className="case_cards intersting">

                <div className="interesting_heading text-center">
                    <h2>Other interesting posts</h2>
                </div>
                <div className="gap_64"></div>
                <div className="row">
                    {
                        relatedBlog.map((item) =>
                         <CaseStudy key={item.id} data={item} />
                        )
                    }
                </div>
            </section>
            </div>
        </>
     );  
}

export default DetailsPage;