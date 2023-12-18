import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import axios from "axios";
import '../DONATE/DONATE.scss';

import DonateSchemas from '../../Schemas/DonateSchemas';


export default function DONATE() {


  function handelDonteData(data){

     axios.post('http://localhost:3005/Donors',data, {
      headers:{
        'Content-Type':'application/json'
        
      }
     });
     }
  return (
    <div className='col-12'  id='DONATE'>
        <h2>Donate now</h2>
        
     <Formik 
     initialValues={{
      name:'',
      email:'',
      condition:'',
      phone:'',
      date:'',
      city:'',
      last_date:'',
      blood_type:''
     }}
     validationSchema={DonateSchemas}
     
     onSubmit={(values)=>{
 
      handelDonteData(values);
 
      
     }}
     > 

  <Form>
            <div>
                <Field type="text" name='name' placeholder='Name' />
                <span className="text-danger"><ErrorMessage name="name" /> </span>
                <Field type="email" name='email' placeholder='Email' />
                <span className="text-danger"><ErrorMessage name="email" /> </span>
                
            </div>
            <div>
                <Field type="tel" id='phone' name='phone' placeholder='Phone' />
                <span className="text-danger"><ErrorMessage name="phone" /> </span>
              <Field as="select"  name="condition" id="" >
                 <option label='condition'></option>
                 <option value="Donor">Donor</option>
                 <option value="Beneficiary">Beneficiary</option>
              </Field>
              <span className="text-danger"><ErrorMessage name="condition" /> </span>
            </div>
            <div>
                <Field type="date" name='date' placeholder='Date' />
                <span className="text-danger"><ErrorMessage name="date" /> </span>
              <Field as="select"  name="City" id="" >
                 <option label='City'></option>
                 <option value="Cairo">Cairo</option>
                 <option value="Giza">Giza</option>
                 
              </Field>
              <span className="text-danger"><ErrorMessage name="City" /> </span>
            </div>
            <div>
                <Field type="text" name='last_date' placeholder='Last donation date' />
                <span className="text-danger"><ErrorMessage name="last_date" /> </span>
              <Field as="select"  name="blood_type" id="" >
                 <option label='blood type'></option>
                 <option value="A-">A-</option>
                 <option value="A+">A+</option>
                 <option value="B+">B+</option>
                 <option value="B-">B-</option>
                 <option value="O+">O+</option>
                 <option value="O-">O-</option>
              </Field>
              <span className="text-danger"><ErrorMessage name="blood_type" /> </span>
            </div>
            <div>
                <Button className='Donate_now' type="submit">Donate now</Button>
            </div>
        </Form>

     </Formik>











      
    </div>
  )
}
