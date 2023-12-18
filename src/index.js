import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "animate.css";
import "./index.scss";
import App from "./App";
import { RecoilRoot } from "recoil";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render
(
 <RecoilRoot>
    <App />
 </RecoilRoot>

);
// #json-server
// json-server --watch ./src/data/db.json --port 3005
// json-server --watch ./src/data/dbdonor.json --port 3005

// #Essentials
// npm i -D react-router-dom@latest
// npm i sass
// npm i bootstrap@latest
// npm i axios

// #Fontawesome
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest
 // swal alirt
//  npm i react-sweetalert2
// #Optional
// npm i sweetalert2
// npm i swiper
// npm i wowjs
// npm i animate.css --save

// #How to use
// # wow js
// import { WOW } from "wowjs";
// useEffect(() => {
//   const wow = new WOW({ live: false });
//   wow.init();
// });

// #Formak
// npm install formik --save

// #yub
// npm i yup
