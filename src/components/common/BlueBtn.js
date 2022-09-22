import { Link } from "react-router-dom";

function BlueBtn({link,btnText}) {
    return ( 
                      <Link className="blue_btn" to={link}>{btnText}</Link>
     );
}

export default BlueBtn;