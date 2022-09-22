import { heroBanner } from '../../data/service';
import { pageTitle} from '../../hooks/title';
import '../../css/service.css'

import ServiceBanner from '../../components/Service/ServiceBanner';
import HowWeWork from '../../components/Service/HowWeWork';
import WorkProcess from '../../components/Home/WorkProcess';
import Comments from '../../components/Home/Comments';
import PriceSection from '../../components/Service/PriceSection';




function ServicePage() {

   pageTitle('Service');
    return ( 
        <>
            <ServiceBanner/>
            <HowWeWork/>
            <WorkProcess/>
            <Comments/>
            <PriceSection/>
           
  
    
   
           
        </>
     );
}

export default ServicePage;