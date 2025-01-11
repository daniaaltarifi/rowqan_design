import { Container, Row, Col, Form } from "react-bootstrap";
import forgetpassword from '../assets/forget.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function ForgetPassword() {
  const [validated, setValidated] = useState(false);
  const lang = location.pathname.split("/")[1] || "en";
const navigate = useNavigate()
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    navigate(`/${lang}/resetpassword`)
  };

  return (
    <section>
      <Container>
        <Row>
          <Col 
            xl={6} 
            md={12} 
            sm={12} 
            className="d-flex justify-content-center align-items-center" // Center the form inside the column
          >
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="w-75" // Apply width to form
            >
              <h1 className="title_forgetpass">Forgot your password?</h1>
              <h6 className="parg_forgetpass">
                Don’t worry, happens to all of us. Enter your email below to recover your password
              </h6>
              
              <Form.Group controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@gmail.com"
                  className="form_input_auth"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              
              <button type="submit" className="Login-button w-100 mt-5">
                Submit
              </button>
            </Form>
          </Col>

          <Col xl={6} md={12} sm={12} className="d-flex justify-content-center align-items-center">
            <img src={forgetpassword} alt="Forget Password" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ForgetPassword;
