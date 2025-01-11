import "../Css/lands.css";
import SecondLands from "./SecondLands";
import land from "../assets/land.jpg";
import lands from "../assets/lands.jpg";
import kitchen from "../assets/ketchen.jpg";
import wide from "../assets/wide.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LiaBedSolid } from "react-icons/lia";
import { FaBath } from "react-icons/fa";
import { TbMeterSquare } from "react-icons/tb";
function Lands() {
  const lang = location.pathname.split("/")[1] || "en";

  const landsData = [
    {
      title: "Large 4-room apartment ",
      price: "$280,000",
      location: "1020 Bloomingdale Ave",
      image: kitchen,
    },
    {
      title: "Large 4-room apartment with a beautiful terrace",
      price: "320000 JD",
      location: "1020 Bloomingdale Ave",
      image: lands,
    },
    {
      title: "Large 4-room apartment with a beautiful terrace",
      price: "320000 JD",
      location: "1020 Bloomingdale Ave",
      image: kitchen,
    },
    {
      title: "Large 4-room apartment with a beautiful terrace",
      price: "320000 JD",
      location: "1020 Bloomingdale Ave",
      image: lands,
    },
    {
      title: "Large 4-room apartment with a beautiful terrace",
      price: "320000 JD",
      location: "1020 Bloomingdale Ave",
      image: kitchen,
    },
    {
      title: "Large 4-room apartment with a beautiful terrace",
      price: "320000 JD",
      location: "1020 Bloomingdale Ave",
      image: lands,
    },
  ];
  return (
    <>
      <div className="container_big_img">
        <img src={land} alt="chalet" className="chalet_big_img" />
        <div className="centered_big_img_chalets">
          <h1>Discover a place youll love to live</h1>
          <h6 className="mt-4">
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc
            egestas ut morbi. Leo diam diam
          </h6>
          <button className="lands_btn">View Properties</button>
        </div>
      </div>
      <Container className="margin_section">
        <h3 className="mb-5">
          <b>ALL CATEGORIES</b>
        </h3>
        <Row>
          {landsData.map((chal, index) => (
            <>
              <Col xl={4} md={6} sm={12} key={index}>
                <Link
                  to={`/${lang}/landdetails/${"1"}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card className="cont_card_lands">
                    <Card.Img
                      variant="top"
                      src={chal.image}
                      height={"200px"}
                      className="object-fit-cover"
                    />
                    <Card.Body className="d-flex justify-content-evenly">
                      <div>
                        <Card.Text>
                          <b>{chal.title}</b>
                        </Card.Text>
                        <Card.Text className="">{chal.location} </Card.Text>
                      </div>
                      <Card.Text className="text_card_det">
                        {chal.price}
                      </Card.Text>
                    </Card.Body>
                    <Card.Body className="d-flex justify-content-between flex-wrap">
                      <span>
                        <LiaBedSolid />4 Beds
                      </span>
                      <span>
                        <FaBath />2 Baths{" "}
                      </span>{" "}
                      <span>
                        <TbMeterSquare />
                        450sqft
                      </span>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </>
          ))}
        </Row>
        </Container>
        <Container className="margin_section ">
        <Row className="text-center margin_section ">
          <h2 className="mb-5">Why You Should Work With Us</h2>
          <Col xl={4} md={6} sm={12}  className="d-flex justify-content-center">
          <div className="d-flex">
            <div>
              <img src={wide} alt="wide range" height={"50px"} width={"50px"} />
              <h5 className="py-3">Wide Range of Properties</h5>
              <h6 className="why_work_text"> 
                We offer expert legal help for all related property items in
                Dubai.
              </h6>
            </div>
           
          </div>
          </Col><Col xl={4} md={6} sm={12} className="d-flex justify-content-center">
          <div className="d-flex">
            <div>
              <img src={wide} alt="wide range" height={"50px"} width={"50px"} />
              <h5 className="py-3">Wide Range of Properties</h5>
              <h6 className="why_work_text"> 
                We offer expert legal help for all related property items in
                Dubai.
              </h6>
            </div>
           
          </div>
          </Col><Col xl={4} md={6} sm={12} className="d-flex justify-content-center" >
          <div className="d-flex">
            <div >
              <img src={wide} alt="wide range" height={"50px"} width={"50px"} />
              <h5 className="py-3">Wide Range of Properties</h5>
              <h6 className="why_work_text"> 
                We offer expert legal help for all related property items in
                Dubai.
              </h6>
            </div>
           
          </div>
          </Col>
        </Row>
      </Container>
      <SecondLands/>
    </>
  );
}

export default Lands;
