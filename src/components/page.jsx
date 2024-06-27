import {React, useState} from "react";
import Form from 'react-bootstrap/Form';


function Page(){

    

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
      }else{
        alert("done");
      }
      
      
      
    };


    return(
        <>
        <main>
        <section className="formwrap">
            <h1>Contact Us</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="container ">
  <div className="row row-cols-1 row-cols-md-2">
    <div className="col inpt">
    <Form.Label>First Name *</Form.Label>
          <Form.Control type="text" id="fname" label="fname" required />
          <Form.Control.Feedback type="invalid">
          This field is required.
          </Form.Control.Feedback>
    </div>
    <div className="col inpt">
    <Form.Label>Last Name *</Form.Label>
          <Form.Control type="text" id="lname" label="lname" required />
          <Form.Control.Feedback type="invalid">
          This field is required.
          </Form.Control.Feedback>
    </div>
    </div>
    <div className="row">
    
    <div className="col inpt">
    <Form.Label>Email Address *</Form.Label>
          <Form.Control type="email" id="email" label="email" required />
          <Form.Control.Feedback type="invalid">
          Please enter a valid email address.
          </Form.Control.Feedback>
    </div>
    </div>
    <div className="row"> 
    <Form.Label>Query Type *</Form.Label>
    <div className="col quest">
    <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="optionRadio" id="optionRadio" value="1" required />
          <label className="form-check-label" htmlFor="optionRadio">General Request</label>
        </div></div>
        <div className="col quest">
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="optionRadio" id="optionRadio2" value="0" required />
          <label className="form-check-label" htmlFor="optionRadio">Support Request</label>
          
    </div></div>
    <input type="radio" name="optionRadio" className="invis" required />
    <div className="invalid-feedback">Please select a query type</div>
    </div>
    <div className="row">
    
    <div className="col inpt">
    <Form.Label>Message *</Form.Label>
    <Form.Control as="textarea" rows={3} id="text" label="textarea" required/>
          <Form.Control.Feedback type="invalid">
            This field is required.
          </Form.Control.Feedback>
    </div>
    </div>
    <div className="row">
    
    <div className="col check">
    
    <Form.Check type="checkbox" id="check" label="I consent to being contacted by the team *" feedback="To submit this form, please consent to being contacted."
          feedbackType="invalid" required/>
    </div>
    
    </div>
    </div>
    <button>Submit</button>
    </Form>
    </section>
        </main>

        </>
    )
}

export default Page;