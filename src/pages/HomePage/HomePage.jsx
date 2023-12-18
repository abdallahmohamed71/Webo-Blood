// import { useEffect } from "react";
import "./HomePage.scss";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { WOW } from "wowjs";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../../components/Carousel/Carousel";
import Button from 'react-bootstrap/Button';
import WhoWeAre from "./componentsPage/WhoWeAre/WhoWeAre";
import Join from "./componentsPage/join/Join";
import CAMPAIGNS from "./componentsPage/CAMPAIGNS/CAMPAIGNS";
import REQUEST from "../../components/Form/Form";
import NumberDonors from "../../components/NumbeDonors/NumberDonors";

function HomePage( ) {

  return (
    <div className="col-12" id="HomePage">
  
   <Carousel />
   <WhoWeAre />
   <Join />
   <CAMPAIGNS />
      <div className="col-12" id="REQUEST_APPOINTMENT">

      </div>
      <REQUEST />
      <NumberDonors />
    </div>
  );
}
export default HomePage;
