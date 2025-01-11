import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

import "../Css/Home.css";
import mainhome from "../assets/main.jpeg";
import calendar from "../assets/calendar.png";
import user from "../assets/user.png";
import location from "../assets/location.png";
import events from "../assets/events.jpeg";
import lands from "../assets/lands.jpg";
import chalet from "../assets/chalet.jpeg";
import TopPicks from "../Component/TopPicks";
import BestRated from "../Component/BestRated";
function Home() {
  return (
    <div className="home-container">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6}>
            <h1 className="maintext_home">
              Forget Busy Work, Start Next Vacation
            </h1>
            <p className="text_home">
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <button className="Login-button">Show More</button>
          </Col>
          <Col md={6}>
            <Image src={mainhome} className="mainHome_img img-fluid" />
          </Col>
        </Row>
        <section className=" margin_section">
          <div className="cont_search">
            <Col className="col_cont_search">
              <Button variant="light" className="filter_home">
                <img src={calendar} alt="calendar icon" />
                <span className="btn_text_filter">Check Available</span>
              </Button>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="filter_home">
                  <img src={user} alt="user icon" />
                  <span className="btn_text_filter">Person 2</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="light" className="filter_home">
                <img src={location} alt="location icon" />
                <span className="btn_text_filter">Select Location</span>
              </Button>

              <button className="Login-button search_btn_home">Search</button>
            </Col>
          </div>
        </section>

        <section className="margin_section ">
          <Container>
            <Row>
              <Col xl={4}>
                <button className="service_home_overlay services_btn_home">
                  Services
                </button>
              </Col>
            </Row>
          </Container>
          <Container className="text-center mt-5 ">
            <Row>
              <Col xl={4} md={6} sm={12} className="cont_img_home_serv">
              <img src={events} alt="" height={"250px"} width={"420px"}className="img_services_home"/>

           
                <div className="bottom-right">Events</div>

              </Col>
             
              <Col xl={4} md={6} sm={12} className="cont_img_home_serv">
              <img src={chalet} alt="" height={"250px"} width={"420px"}className="img_services_home "/>

             
                <div className="bottom-right">Chalets</div>

              </Col>
              
              
              <Col xl={4} md={6} sm={12} className="cont_img_home_serv">
                <img
                  src={lands}
                  alt="services img"
                  className="img_services_home"
                />
              
                <div className="bottom-right">Lands</div>
              </Col>
            </Row>
          </Container>
       
        </section>
        <section className="margin_section">
        <Container>
            <Row>
              <Col xl={4}>
                <button className="service_home_overlay services_btn_home">
                Best Rated
                </button>
              </Col>
            </Row>
          </Container>
          <BestRated/>
        </section>
        <section className="margin_section">
        <Container>
            <Row>
              <Col xl={4}>
                <button className="service_home_overlay services_btn_home">
                  Most Picked
                </button>
              </Col>
            </Row>
          </Container>
          <TopPicks/>
        </section>
      </Container>
    </div>
  );
}

export default Home;
