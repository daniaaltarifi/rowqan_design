import { Container, Row, Col } from "react-bootstrap";
import chal from "../assets/chal.png";
import chalet from "../assets/chalet.jpeg";
import top3 from "../assets/top3.jpg";
import top4 from "../assets/top4.jpg";
import { useState, useRef } from "react";
import arrow from "../assets/arrow.png";
import { Link, useLocation } from "react-router-dom";

function LandsDetails() {
  const location = useLocation();
  const lang = location.pathname.split("/")[1] || "en";
  const [largeImage, setLargeImage] = useState(chalet);
  const [activeImage, setActiveImage] = useState(largeImage);
  const images = [chal, chalet, top3, top4, chalet, chal];
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
      <Container className="mt-5">
        <h1>Details for this land</h1>
        <Row>
          <Col sm={12} md={12} lg={6} className=" image-grid">
            {/* Big Image */}
            <div className="mb-3">
              <img
                src={largeImage}
                alt="image"
                height={"350px"}
                width={"100%"}
              />
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
          <Col sm={12} md={6} lg={6} className="cont_Brief_characteristics ">
            <div className="box_Brief_characteristics_lands">
            <ul>
                <h5 style={{fontWeight:"bold"}}>Brief characteristics</h5>
                <li>Air-Conditioning</li>
                <li>Balcony</li>
                <li>Bathroom</li>
                <li>Bedroom</li>
                <li>Kitchen</li>
                <li>Bathroom</li>
                <li>Living Room</li>
                <li>Dining Room</li>
                <li>Sofa</li>
                <li>TV</li>
                <li>Internet</li>
                <li>Washing Machine</li>
                <li>Kitchen Appliances</li>
                <li>Fireplace</li>
                <li>Security</li>
                <li>Laundry</li>
              </ul>
            </div>
          </Col>
          <Link to={`/${lang}/bookingland/${"1"}`}>
              <button className="booknow_button_events mt-5">Reserve Now</button>
            </Link>
        </Row>
    
      </Container>
    </div>
  );
}

export default LandsDetails;
