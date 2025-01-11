import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import top1 from "../assets/top1.jpg";
import top2 from "../assets/top2.jpg";
import top3 from "../assets/top3.jpg";
import top4 from "../assets/top4.jpg";
function TopPicks() {
  return (
    <>
      <Container className=" mt-5 ">
        <Row>
          <Col xl={3} md={6} sm={12}>
            <img src={top1} alt="top picks"  height={"200px"}
              width={"100%"} className="toppicks_home_img" />
              <div>
                <h5 className="title_of_toppick">Shangri-La</h5>
                <p className="parg_of_toppicks">
                Colombo, Sri Lanka
                </p>
              </div>
          </Col>
          <Col xl={3} md={6} sm={12}>
            <img src={top2} alt="top picks"  height={"200px"}
              width={"100%"} className="toppicks_home_img" />
                <div>
                <h5 className="title_of_toppick">Top View</h5>
                <p className="parg_of_toppicks">
                Hikkaduwe, Sri Lanka                </p>
              </div>
          </Col>
          <Col xl={3} md={6} sm={12}>
            <img
              src={top3}
              alt="top picks"
              height={"200px"}
              width={"100%"}
              className="toppicks_home_img"
            />
              <div>
                <h5 className="title_of_toppick">Green Villa</h5>
                <p className="parg_of_toppicks">
                Kandy, Sri Lanka                </p>
              </div>
          </Col>
          <Col xl={3} md={6} sm={12}>
            <img
              src={top4}
              alt="top picks"
              height={"200px"}
              width={"100%"}
              className="toppicks_home_img"
            />
              <div>
                <h5 className="title_of_toppick">Wodden Pit</h5>
                <p className="parg_of_toppicks">
                Ambalangode, Sri Lanka                </p>
              </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TopPicks;
