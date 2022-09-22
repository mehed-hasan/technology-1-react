import { Link } from "react-router-dom";

function WhiteBtn({link}) {
    return ( 
        <>
         <Link className="white_btn" to={link}>Contact Us </Link>
        </>
     );
}

export default WhiteBtn;