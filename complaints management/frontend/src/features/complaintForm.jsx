import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import { useAddComplaintMutation } from "../services/complaintsApi";


    const ComplaintForm =(()=>{
        const [addcompalintFn]=useAddComplaintMutation();
        
        return(
            <Formik
            initialValues={{ firstName: '', Number:"", Complaint:'',Status:"Pending",Branch:'',date:new Date()}}
            validationSchema={Yup.object({
            //   firstName: Yup.string()
            //     .max(15, 'Must be 15 characters or less')
            //     .required('Required'),
            //   Number: Yup.number()
            //     .min(10, 'Must be 10 characters'),
            // //   Complaint: Yup.string().required('Required'),
            })}
            onSubmit={(values) => {
              console.log(values);
               addcompalintFn(values)
            }}
          >
            <Form className="w-25 text-center position-absolute top-35 start-50 translate-middle-x">
              <label htmlFor="firstName">Student Name</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" />
              <br />
      
              <label htmlFor="Number">Phone Number</label>
              <Field name="Number" type="text" />
              <ErrorMessage name="Number" />
              <br />

                <label htmlFor="Branch">Branch</label>
              <Field name="Branch" type="text" />
              <ErrorMessage name="Branch" />
              <br />

      
              <label htmlFor="Complaint">Complaint</label>
              <Field name="Complaint" type="text" />
              <ErrorMessage name="Complaint" />
              <br />


      
              <button type="submit">Submit</button>
              
            </Form>
          </Formik>
     
        )
    })

    export default ComplaintForm;