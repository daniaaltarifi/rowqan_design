import Carousel from "react-bootstrap/Carousel";
import events from "../assets/events.jpeg";
import eve from "../assets/eve.jpg";
import "../Css/Events.css";
import BreadCrumbs from "../Component/BreadCrumbs";
import { Container, Row, Col } from "react-bootstrap";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
function Events() {
  const lang = location.pathname.split("/")[1] || "en";

  const category = [
    {
      title: "Wedding",
    },
    { title: "Birthday" },
    { title: "Conferencies" },
    { title: "Family" },
    { title: "Gatherings" },
    { title: "Engagments" },
    { title: "Henna" },
    { title: "Private Events" },
  ];
  const eventsData = [
    {
      date: "2022-03-15",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis lobortis lacus,.",
    },   {
      date: "2022-03-15",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis lobortis lacus,.",
    },   {
      date: "2022-03-15",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis lobortis lacus, vel convallis nunc facilisis eu. Nulla facilisi. Donec et ipsum vel mi ultricies consectetur.",
    },   {
      date: "2022-03-15",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis lobortis lacus, vel convallis nunc facilisis eu. Nulla facilisi. Donec et ipsum vel mi ultricies consectetur.",
    },

  ]
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img src={events} alt="slider" className="slider_img" />
          <div className="top_left custom-breadcrumbs">
            <BreadCrumbs page_to="/ Events Page" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img src={events} alt="slider" className="slider_img" />
          <div className="top_left custom-breadcrumbs">
            <BreadCrumbs page_to="/ Events Page" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={events} alt="slider" className="slider_img" />
          <div className="top_left custom-breadcrumbs">
            <BreadCrumbs page_to="/ Events Page" />
          </div>
        </Carousel.Item>
      </Carousel>
      <Container className="margin_section">
        <h4 className="title_events">Explore By Category</h4>
        <Row>
          {category.map((cate) => (
            <>
              <Col xl={3} md={6} sm={12} className="mb-3">
                <button className="category_events">{cate.title}</button>
              </Col>
            </>
          ))}
        </Row>
        <Row className="mt-5">
          {eventsData.map((event)=>(
            <>
          <Col xl={6} md={6} sm={12} className="cont_img_home_serv">
            <Link to={`/${lang}/eventscategory`}>
            <img
              src={eve}
              alt="services img"
              className="img_services_home img_events"
            />
            <div className="btn_top_right">
              <button className="service_home_overlay">$50 per night</button>
            </div>
            <div className="events_date_bottom_right">
              <div className="d-flex">
                <MdDateRange className="mb-2" />
                <h6 className="mx-2">{event.date}</h6>
              </div>
              <h6>
             {event.description}
              </h6>
            </div>
          </Link>
          </Col>

          </>

          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Events;
