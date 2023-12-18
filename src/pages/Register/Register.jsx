
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Register.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import RegisterSchema from "../../Schemas/registerSchema";
import axios from "axios";



export default function Register() {
 function handelRegisterAccount(data){
delete data.confirmpassword;
 axios.post('http://localhost:3005/users',data, {
  headers:{
    'Content-Type':'application/json'
  }
 });
 }
  return (
    <Formik 
    initialValues={{
      name:'',
      email:'',
      password:'',
      confirmpassword:'',
    }}
    validationSchema={RegisterSchema}
    onSubmit={(values)=>{
     handelRegisterAccount(values)
     
    }}
    >
         <Form className="login_form my-5">
         <div className="d-flex flex-column gap-2 mb-3">
            <label htmlFor="">Name:</label>
          <Field  name="name" placeholder="Name"  type="text" />
          <span className="text-danger"><ErrorMessage name="name" /> </span>
       
          </div>
          <div className="d-flex flex-column gap-2 mb-3">
            <label htmlFor="">Email:</label>
          <Field  name="email" placeholder="Email"  type="email" />
          <span className="text-danger"><ErrorMessage name="email" /> </span>

          </div>
          <div className="d-flex flex-column gap-2 mb-3">
            <label htmlFor="">Password:</label>
          <Field  name="password" placeholder="Password"  type="password"/>
          <span className="text-danger"><ErrorMessage name="password" /> </span>

          </div>
          <div className="d-flex flex-column gap-2 mb-3">
            <label htmlFor="">Confirm Password:</label>
          <Field  name="confirmpassword" placeholder="Confirm Password:"  type="password"/>
          <span className="text-danger"><ErrorMessage name="confirmpassword" /> </span>

          </div>
          <div>Already Have and account? <Link to="/Login"> Login now </Link> </div>
      <div className="d-flex justify-content-end">
      <Button variant="primary" type="submit">Register</Button>
      </div>
         </Form>
    </Formik>
  );
}
