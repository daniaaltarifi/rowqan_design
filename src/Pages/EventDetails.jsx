import { Container, Row, Col } from "react-bootstrap";
import wedd2 from "../assets/wedd2.jpg";
import wedding from "../assets/wedding.jpg";
import { useState, useRef } from "react";
import arrow from "../assets/arrow.png";
import loca from "../assets/loca.png";
import people from "../assets/people.jpg";
import { Link, useLocation } from "react-router-dom";

function EventDetails() {
    const location=useLocation();
    const lang = location.pathname.split("/")[1] || "en";
  const [largeImage, setLargeImage] = useState(wedding);
  const [activeImage, setActiveImage] = useState(largeImage);
  const images = [wedding, wedd2, wedding, wedd2, wedding, wedd2];
  const smallImagesContainerRef = useRef(null); // Ref for small images container

  const handleNextImages = () => {
    if (smallImagesContainerRef.current) {
      smallImagesContainerRef.current.scrollBy({
        left: 200, // Scroll right by 200px
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  const handlePrevImages = () => {
    if (smallImagesContainerRef.current) {
      smallImagesContainerRef.current.scrollBy({
        left: -200, // Scroll left by 200px
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  const handleImageClick = (image) => {
    setLargeImage(image);
    setActiveImage(image);
  };

  return (
    <div>
      <Container>
        <h1>Details for this event</h1>
        <Row>
          <Col sm={12} md={12} lg={6} className=" image-grid">
            {/* Big Image */}
            <div className="big-image mb-3">
            <img src={largeImage}  alt="image" height={"350px"} width={"100%"}/>
            </div>
            {/* Small Images with Arrows */}
            <Row className="d-flex justify-content-center position-relative">
              {/* Left Arrow Column */}
              <Col
                xs={1}
                sm={1}
                md={1}
                lg={1}
                xl={1}
                className="d-flex justify-content-center align-items-center"
              >
                <button className="arrow arrow-left" onClick={handlePrevImages}>
                  &#8249; {/* Left Arrow */}
                </button>
              </Col>
              {/* Small Images Column */}
              <Col
                xs={10}
                sm={10}
                md={10}
                lg={10}
                xl={10}
                className="d-flex justify-content-center"
              >
                <div
                  className="small-images-container"
                  ref={smallImagesContainerRef}
                >
                  {images.map((image, index) => (
                    <Col
                      xs={3}
                      sm={3}
                      md={3}
                      lg={3}
                      key={index}
                      className="d-flex justify-content-center"
                    >
                      <img
                        src={image}
                        className={`img-fluid small-image ${
                          activeImage === image ? "active" : ""
                        }`}
                        alt={`Small Product ${index + 1}`}
                        onClick={() => handleImageClick(image)}
                        loading="lazy"
                      />
                    </Col>
                  ))}
                </div>
              </Col>
              {/* Right Arrow Column */}
              <Col
                xs={1}
                sm={1}
                md={1}
                lg={1}
                xl={1}
                className="d-flex justify-content-center align-items-center"
              >
                <button
                  className="arrow arrow-right"
                  onClick={handleNextImages}
                >
                  &#8250; {/* Right Arrow */}
                </button>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <div className="chatbot_events">
              <h5 className="chat_title">Chat Now </h5>

              <div>
                <h6>Your Message</h6>
                <div className="d-flex justify-content-center align-items-center">
                  <input
                    type="text"
                    className="input_chatbot"
                    placeholder="Your Message"
                  />
                  <img src={arrow} height={"40px"} width={"50px"} alt="arrow" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            sm={12}
            md={6}
            lg={6}
            className="d-flex justify-content-between mt-5"
          >
            <div className="d-flex">
              <img src={loca} height={"40px"} width={"50px"} alt="people" />
              Amman,Jordan{" "}
            </div>
            <div className="d-flex">
              {" "}
              <img src={people} height={"40px"} width={"50px"} alt="people" />
              Accommodates up to 22 people
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6} className="mt-5">
            <h2>Description</h2>
            <h6>
              FEDORS GROUP offers an exclusive FOR SALE elegant large 5-room
              apartment on Vincent Hložník Street in the Condominium Renaissance
              residential complex. Thanks to its unique location, the property
              has access to a large Japanese garden with an area of 35 m2, which
              can be accessed directly from the bedroom. The front of the
              apartment is at the height of the third floor, so the terrace is
              located just above the treetops, which gives the apartment a
              unique atmosphere. Overall, the apartment has a direct view of the
              Danube River and the surrounding forests. The apartment offers
              extraordinary comfort, has a first-class interior from the leading
              architectural office Cakov Makara and equipment from renowned
              world furniture manufacturers. The overall atmosphere of the
              apartment is completed
            </h6>
            <h3>Basic Plan:</h3>
            <ul>
              <li>
                Requirements: Proven experience as a Full-Stack Developer using
                React and Node.js. Proficiency in JavaScript (ES6+)
              </li>
              <li>HTML5</li>{" "}
              <li>
                Requirements: Proven experience as a Full-Stack Developer using
                React and Node.js. Proficiency in JavaScript (ES6+)
              </li>
              <li>HTML5</li>
            </ul>
            <h3>Silver Plan:</h3>
            <ul>
              <li>
                Requirements: Proven experience as a Full-Stack Developer using
                React and Node.js. Proficiency in JavaScript (ES6+)
              </li>
              <li>HTML5</li>{" "}
              <li>
                Requirements: Proven experience as a Full-Stack Developer using
                React and Node.js. Proficiency in JavaScript (ES6+)
              </li>
              <li>HTML5</li>
            </ul>
            <h3>Gold Plan:</h3>
            <ul>
              <li>
                Requirements: Proven experience as a Full-Stack Developer using
                React and Node.js. Proficiency in JavaScript (ES6+)
              </li>
              <li>HTML5</li>{" "}
              <li>
                Requirements: Proven experience as a Full-Stack Developer using
                React and Node.js. Proficiency in JavaScript (ES6+)
              </li>
              <li>HTML5</li>
            </ul>
            <h3>Rowqan Plan:</h3>
            <ul>
              <li>
                Requirements: Proven experience as a Full-Stack Developer using
                React and Node.js. Proficiency in JavaScript (ES6+)
              </li>
              <li>HTML5</li>{" "}
              <li>
                Requirements: Proven experience as a Full-Stack Developer using
                React and Node.js. Proficiency in JavaScript (ES6+)
              </li>
              <li>HTML5</li>
            </ul>
            <Link to={`/${lang}/reserveevent/${"1"}`}>
              <button className="booknow_button_events">Reserve Now</button>
                </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EventDetails;
