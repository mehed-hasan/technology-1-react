import Contact from '../../components/common/Contact';
import FAQ from '../../components/common/FAQ';
import FaqBanner from '../../components/FAQ/FaqBanner';
import '../../css/faq.css';
import { pageTitle } from '../../hooks/title';

function FaqPage() {

  pageTitle('FAQ')
    return ( 
        <>

      <FaqBanner/>
      <FAQ/>
      <Contact/>


        </>
     );
}

export default FaqPage;