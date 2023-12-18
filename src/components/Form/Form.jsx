import '../Form/Form.scss';
import { ErrorMessage, Field, Form, Formik } from "formik";
export default function REQUEST() {
  return (
 <>
 <div className='col-12' id='APPOINTMENT'>
  <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 helpfull '> 
   <div>
    <h4>Good To Know</h4>
    <span></span>
    <h2>Helpful Information</h2>
    <ul className='Helpful_Information'>
      <li>Maintain a healthy iron level by eating iron rich foods.</li>
      <li>Drink an extra 16 oz. of water prior to your donation.</li>
      <li>Avoid alcohol consumption before your blood donation.</li>
      <li>Remember to bring the donor card or national ID/Passport.</li>
      <li>Finally, Try to get a good night sound sleep after donation.</li>
    </ul>
   </div>
 </div>

 <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 ' id='REQUEST'>
 <div className='text_form'>
        <h2>REQUEST APPOINTMENT</h2>
        </div>

      
     <div className='content_form'>
     <Formik 
     initialValues={{
      name:'',
      email:'',
      condition:{
        value:''
      },
      phone:'',
      date:'',
      city:{
        value:''
      },
      last_date:'',
      blood_type:{
        value:''
      }
     }}
    //  validationSchema={DonateSchemas}
    //  onSubmit={(values)=>{
    //   handelDonteData(values)
      
    //  }}
     > 

  <Form>
            <div>
                <Field type="text" name='name' placeholder='Name' />
                <span className="text-danger"><ErrorMessage name="name" /> </span>
                <Field type="email" name='email' placeholder='Email' />
                <span className="text-danger"><ErrorMessage name="name" /> </span>
                
            </div>
            <div>
                <Field type="tel" id='phone' name='phone' placeholder='Phone' />
                <span className="text-danger"><ErrorMessage name="name" /> </span>
                <Field as="select"  name="City" id="" >
                 <option label='City'></option>
                 <option value="Cairo">Cairo</option>
                 <option value="Giza">Giza</option>
              </Field>
              <span className="text-danger"><ErrorMessage name="name" /> </span>
            </div>
            <div>
                <Field type="date" name='date' placeholder='Date' />
                <span className="text-danger"><ErrorMessage name="name" /> </span>
        
              <Field type='time'  name="condition" id="" />
            
              <span className="text-danger"><ErrorMessage name="name" /> </span>
            </div>
           
                <button className='GET_APPOINTMENT' type="submit">Donate now</button>
         
        </Form>

     </Formik>
    </div>  

  
 </div>

 </div>



 </>
  )
};
            