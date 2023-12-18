import { ErrorMessage,  Field, Form, Formik } from "formik";
import "./Login.scss";
import { Button } from "react-bootstrap";
import { Link, json } from "react-router-dom";
import loginSchema from "../../Schemas/loginSchema";
import axios from "axios";
import { useRecoilState } from "recoil";
import { $authData } from "../../story/authAtom";
import Swal from "sweetalert2";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import loginSchema from "../../Schemas/loginSchema";
// import axios from "axios";
// import { useRecoilState } from "recoil";
// import { authData } from "../../states/atoms/authAtom";

export default function Login() {
  
  const [Auth,setAuth] = useRecoilState($authData);
  console.log(Auth)
 function handelLoginAccount(data){
  axios(`http://localhost:3005/users?email=${data.email}&password=${data.password}`
  ).then((data)=>{
    if(data.data.length > 0){
      localStorage.setItem('loggedinuser',JSON.stringify(data.data[0]));
      setAuth({
        isAuth:true,
        userid:data.data[0].id
      })
      // Swal.fire("Log in");
      Swal.fire({
        title: "Hello abdallah",
        icon: "success"
      });
     
    }else{

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Check your password or account!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
   
  }); 
  }
  return (
  <Formik 
  initialValues={{
    email:'',
    password:''
  }}
  validationSchema={loginSchema}
  onSubmit={(values)=>{
    setTimeout(() => {
      handelLoginAccount(values);
    }, 1000);
 
  }}
  >
       <Form className="login_form my-5">
        <div className="d-flex flex-column gap-2 mb-3">
          <label htmlFor="">Email:</label>
        <Field  name="email" placeholder="Email"  type="email" />
        <span className="text-danger"><ErrorMessage name="email" /> </span>
        </div>
        <div className="d-flex flex-column gap-2 mb-3">
          <label htmlFor="">Password:</label>
        <Field  name="password" placeholder="Password"  type="password" />
        <span className="text-danger"><ErrorMessage name="password" /> </span>
        </div>
        <div>Don't Have and account?  <Link to="/Register"> Create new account </Link> </div>
        <div className="d-flex justify-content-center">
         <Button variant="primary" type="submit">Login</Button>
    </div>
       
       </Form>
  </Formik>
  );
}



/* <form action="#">
<input type="text" name="" id="" placeholder="Email" />
<input type="text" name="" id="" placeholder="Password" />
<input type="submit" value="submit" />
</form>  */