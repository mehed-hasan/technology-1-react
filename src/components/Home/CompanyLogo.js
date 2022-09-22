import { Link } from "react-router-dom";

function CompanyLogo({data}) {
    return ( 
        <div className="company_logo_container">
            <Link to={'/'}  >
              <div dangerouslySetInnerHTML={{__html:data}}>
              </div>
            </Link>
          </div>
     );
}

export default CompanyLogo;