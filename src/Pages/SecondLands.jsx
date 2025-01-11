import { Container, Row, Col } from "react-bootstrap";
import land from "../assets/land.jpg";
import lands from "../assets/lands.jpg";
import kitchen from "../assets/ketchen.jpg";

function SecondLands() {
  return (
    <>
      <div className="cont_exclusive_lands margin_section">
        <h4 className="title_exclusive_lands">Exclusive Properties</h4>
    <Container>
      <Row>
        {/* First Column */}
        <Col xl={6} md={6} sm={12} className="d-flex align-items-stretch">
          <img
            src={lands}
            alt="lands img"
            className="rounded img-fluid"
          />
        </Col>

        {/* Second Column */}
        <Col xl={6} md={6} sm={12} className="d-flex flex-column">
          <img
            src={kitchen}
            alt="lands img"
            className="rounded img-fluid"
            style={{ height: '65%' }}
          />
          
          <div className="d-flex flex-wrap">
            <Col xl={6} md={6} sm={12} className="d-flex align-items-stretch">
              <img
                src={lands}
                alt="lands img"
                className="rounded img-fluid"
              />
            </Col>
            <Col xl={6} md={6} sm={12} className="d-flex align-items-stretch">
              <img
                src={land}
                alt="lands img"
                className="rounded img-fluid"
              />
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
      </div>
    </>
  );
}

export default SecondLands;
