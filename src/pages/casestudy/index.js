import CaseBanner from "../../components/Casestudy/CaseBanner";
import CaseStudies from "../../components/Casestudy/CaseStudies";
import { pageTitle } from "../../hooks/title";

function CaseStudy() {

    pageTitle('Casestudy')
    return ( 
        <>

                <CaseBanner/>
                <CaseStudies/>

        </>
     );
}

export default CaseStudy;