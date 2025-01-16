import "./Menu.css" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars , faXmark } from "@fortawesome/free-solid-svg-icons";
// import { Link, useLocation } from "react-router-dom";



// , faPhone , faHouse , faInfo , faPager , faLayerGroup



const Menu = () => 
{

// const location = useLocation();

    return (
<>

<button className="btn listSides" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
<FontAwesomeIcon className="fontAwsemList"  icon={faBars} />


</button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
    <span className="yTitle">M</span>y  <span className="yTitle">P</span>ort<span className="yTitle">f</span>olio

    </h5>
    <button type="button" className="  closBtn" data-bs-dismiss="offcanvas" aria-label="Close">
    <FontAwesomeIcon icon={faXmark} />
    </button>
  </div>



  <div className="offcanvas-body ">





<div className="bodyNav">





</div>


</div>


</div>


</>
    );
};
export default Menu ;