import { goal } from "../../data/home";

function Goals() {
    return ( 

        <>
               <div className="gapper">
        <div className="gap"></div>
        <div className="gap"></div>
       </div>
       
        <section id="goal_section" >
         <div className="container-fluid  container-lg ">
           <div className="row">
              <div className="goal_section_left col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6 " >
                
                  <div className="goal_floating_images_left" data-aos="laying-left-spring" data-aos-duration="1000" >
                    <img className="parent_image img-fluid" src={require(`../../images/goal_section/${goal.section1.images.image1}`)} alt="" srcSet=""/>
                    <img className="left_children_image" src={require(`../../images/goal_section/${goal.section1.images.image2}`)} alt="" srcSet=""/>
                    <img className="right_children_image" src={require(`../../images/goal_section/${goal.section1.images.image3}`)} alt="" srcSet=""/>
                  </div>


                
              </div>

              <div className="goal_section_right col-sm-12 col-md-6 col-lg-6 col-xxl-6 text-center text-md-start ">
                <h2 data-aos="fade-up" data-aos-duration="400">{goal.section1.title}</h2>
                <p data-aos="fade-up"data-aos-duration="800">
                  {goal.section2.desc}
                </p>
              </div>

           </div>

           <div className="gapper">
            <div className="gap"></div>
            <div className="gap"></div>
           </div>
    

           <div className="row">
            <div className="goal_section_right col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6 text-center text-md-start order-2  order-sm-2 order-md-1 order-lg-1 order-xl-1 order-xx1-1">
              <h2 data-aos="fade-up" data-aos-duration="400" >{goal.section2.title}</h2>
              <p data-aos="fade-up" data-aos-duration="800">
                {goal.section2.desc}
                 </p>
            </div>

            <div className="goal_section_right col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6 order-1  order-sm-1 order-md-2 order-lg-2 order-xl-2 order-xx1-2">
                <div className="goal_floating_images_right " data-aos="laying-left" data-aos-duration="2000" >
                  <img className="img-fluid parent_image" src={require(`../../images/goal_section/${goal.section2.images.image1}`)} alt=""/>
                  <img className="gear " src={require(`../../images/goal_section/${goal.section2.images.image2}`)} alt="" srcSet=""/>
                </div>
            </div>
         </div>
         </div>
       </section>


       <div className="gapper">
        <div className="gap"></div>
        <div className="gap"></div>
       </div>
        </>
     );
}

export default Goals;