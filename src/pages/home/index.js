import { useEffect } from 'react';
import {pageTitle} from '../../hooks/title.js';
import Banner from '../../components/Home/Banner.js';
import Companies from '../../components/Home/Companies.js';
import Comments from '../../components/Home/Comments.js';
import WorkProcess from '../../components/Home/WorkProcess.js';
import Goals from '../../components/Home/Goals.js';
import Features from '../../components/Home/Features..js';
import Portfolio from '../../components/Home/Portfolio.js';
import FAQ from '../../components/common/FAQ.js';
import Contact from '../../components/common/Contact.js';
import '../../css/main.css';



function HomePage() {

 
        pageTitle('Home');



    return (
       <>
   <Banner/>
   <Companies/>
   <WorkProcess/>
   <Goals/>
   <Features/>
   <Portfolio/>
   <Comments/>
   <FAQ/>
   <Contact/>
    </>
     );
}

export default HomePage;