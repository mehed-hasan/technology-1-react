import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import HomePage from "./pages/home";
import ServicePage from "./pages/service";
import "slick-carousel/slick/slick.css"; 
import 'aos/dist/aos.css';
import AOS from "aos";
import { useEffect, useState } from "react";
import SolutionPage from "./pages/solution";
import FaqPage from "./pages/faq";
import CaseStudy from "./pages/casestudy";
import DetailsPage from "./pages/casestudy/detailsPage";


function App() {

  useEffect(()=>{
    AOS.init();
  },[])

  const [route, setRoute] = useState(window.location.pathname);

  return ( 
    <>
      <BrowserRouter>
      <main className="page_content" style={{minHeight:'100vh'}} id="main">
      <NavBar route={route} setRoute={setRoute}/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/service" element={<ServicePage/>}></Route>
          <Route path="/solution" element={<SolutionPage/>}></Route>
          <Route path="/faq" element={<FaqPage/>}></Route>
          <Route path="/casestudy" element={<CaseStudy/>}></Route>
          <Route path="/casestudy/details/:id/:cat/:title" element={<DetailsPage/>}></Route>
        </Routes>
        </main>
        <Footer route={route} setRoute={setRoute}/>

      </BrowserRouter>
    </>
   );
}

export default App;