import { faqBanner } from '../../data/faq';

function FaqBanner() {
    return ( 
        <>
        
<div  style={{backgroundImage:`url(${require('../../images/banner/faq_banner.jpg')})`}}  className="faq_banner">

<div className="banner_content text-center">
    <h2>FAQ</h2>
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <rect width="34" height="34" rx="12" fill="url(#pattern0)"/>
        <rect x="7.08301" y="14.1667" width="2.125" height="5.66667" fill="#282938"/>
        <rect x="10.625" y="14.1667" width="2.125" height="5.66667" fill="#282938"/>
        <rect x="14.1665" y="14.1667" width="2.125" height="5.66667" fill="#282938"/>
        <rect x="17.708" y="14.1667" width="2.125" height="5.66667" fill="#282938"/>
        <rect x="21.25" y="14.1667" width="2.125" height="5.66667" fill="#282938"/>
        <rect x="24.7915" y="14.1667" width="2.125" height="5.66667" fill="#282938"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        
        </pattern>
        <image id="image0_66_6564" width="1" height="1"/>
        </defs>
        </svg>
        

    
    <h1>{faqBanner.title}</h1>

    <p>
        {faqBanner.desc}
    </p>
</div>
</div>

      {/* <!-- Contact section has started  --> */}
      <div className="gapper">
        <div className="gap"></div> 
       </div>

        </>
     );
}

export default FaqBanner;