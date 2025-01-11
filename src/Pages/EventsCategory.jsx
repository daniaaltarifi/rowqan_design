import { Col, Container, Row, Card } from "react-bootstrap";
import wedding from "../assets/wedding.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import wedd2 from "../assets/wedd2.jpg";
import people from "../assets/people.jpg";
import dollar from "../assets/dollar.png";
import loca from "../assets/loca.png";
import chat from "../assets/chat.png";
import cashback from "../assets/cashback.jpg";
import { useLocation } from "react-router-dom";
function EventsCategory() {
    const location=useLocation();
  const lang = location.pathname.split("/")[1] || "en";

  const rating = 5;

  const colors = {
    orange: "#F2C265",
    grey: "#a9a9a9",
  };

  // Star icon SVG component
  const StarIcon = ({ filled }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill={filled ? colors.orange : colors.grey} // Use colors.orange for filled and colors.grey for empty
      />
    </svg>
  );
  // Prop types validation for StarIcon
  StarIcon.propTypes = {
    filled: PropTypes.bool.isRequired, // Validate that 'filled' is a required boolean
  };
  return (
    <div>
      <img src={wedding} alt="wedding" className="catg_events" />
      <Container className="margin_section">
        <Row>
          <Col xl={6} md={6} sm={12}>
            <Card className="cont_card_chalets">
              <Card.Img
                variant="top"
                src={wedd2}
                height={"250px"}
                className="object-fit-cover"
              />
              <Card.Body>
                <Card.Title className="title_chalets">
                  Name Of Wedding
                </Card.Title>
              </Card.Body>
              <Card.Body className="d-flex justify-content-between flex-wrap ">
                <Card.Text className="text_card_det mb-5">
                  <img
                    src={people}
                    height={"40px"}
                    width={"50px"}
                    alt="people"
                  />
                  Accommodates up to 22 people
                </Card.Text>
                <Card.Text className="text_card_det">
                  <img
                    src={dollar}
                    height={"40px"}
                    width={"50px"}
                    alt="dollar"
                  />{" "}
                  849 JD
                </Card.Text>
                <Card.Text className="text_card_det">
                  <div className="cont_rating">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        <StarIcon filled={rating > index} />
                      </span>
                    ))}
                    Number Of Stars
                  </div>
                </Card.Text>
                <Card.Text className="text_card_det">
                  <img
                    src={location}
                    height={"40px"}
                    width={"50px"}
                    alt="dollar"
                  />{" "}
                  849 JD
                </Card.Text>
              </Card.Body>
              <Card.Body className="d-flex justify-content-between flex-wrap">
                <Card.Text className="text_card_det">
                  <img
                    src={cashback}
                    height={"40px"}
                    width={"50px"}
                    alt="dollar"
                  />{" "}
                  10% Cashback{" "}
                </Card.Text>
              </Card.Body>
              <Card.Body className="d-flex justify-content-center ">
              <Link to={`/${lang}/eventdetails/${"1"}`}>
              <button className="booknow_button_events">Book Now</button>
                </Link>
                <Link style={{textDecoration:"none",color:"#000"}}>
                  <h6>
                    <img
                      src={chat}
                      height={"40px"}
                      width={"40px"}
                      alt="dollar"
                    />
                    Chat Now
                  </h6>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} md={6} sm={12}>
            <Card className="cont_card_chalets">
              <Card.Img
                variant="top"
                src={wedd2}
                height={"250px"}
                className="object-fit-cover"
              />
              <Card.Body>
                <Card.Title className="title_chalets">
                  Name Of Wedding
                </Card.Title>
              </Card.Body>
              <Card.Body className="d-flex justify-content-between flex-wrap ">
                <Card.Text className="text_card_det mb-5">
                  <img
                    src={people}
                    height={"40px"}
                    width={"50px"}
                    alt="people"
                  />
                  Accommodates up to 22 people
                </Card.Text>
                <Card.Text className="text_card_det">
                  <img
                    src={dollar}
                    height={"40px"}
                    width={"50px"}
                    alt="dollar"
                  />{" "}
                  849 JD
                </Card.Text>
                <Card.Text className="text_card_det">
                  <div className="cont_rating">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        <StarIcon filled={rating > index} />
                      </span>
                    ))}
                    Number Of Stars
                  </div>
                </Card.Text>
                <Card.Text className="text_card_det">
                  <img
                    src={loca}
                    height={"40px"}
                    width={"50px"}
                    alt="dollar"
                  />{" "}
                  849 JD
                </Card.Text>
              </Card.Body>
              <Card.Body className="d-flex justify-content-between flex-wrap">
                <Card.Text className="text_card_det">
                  <img
                    src={cashback}
                    height={"40px"}
                    width={"50px"}
                    alt="dollar"
                  />{" "}
                  10% Cashback{" "}
                </Card.Text>
              </Card.Body>
              <Card.Body className="d-flex justify-content-center ">
                <Link to={`/${lang}/eventdetails/${"1"}`}>
                  <button className="booknow_button_events">Book Now</button>
                </Link>
                <Link style={{textDecoration:"none",color:"#000"}}>
                  <h6>
                    <img
                      src={chat}
                      height={"40px"}
                      width={"40px"}
                      alt="dollar"
                    />
                    Chat Now
                  </h6>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EventsCategory;
