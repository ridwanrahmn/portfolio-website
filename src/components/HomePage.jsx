import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import myPhoto from "../assets/Myphoto.jpg";

const HomePage = () => {
  return (
    <div id="home" className="landing-page">
      <Container data-aos="zoom-in">
        <Row className="mx-auto align-items-center">
          <Col
            className="text-md-start text-center"
            lg={{ span: 5, offset: 1 }}
            md={6}
          >
            <Row>
              <h1>Hi, I'm Ridwan</h1>
              <p style={{ color: "#adadad", fontSize: "1.1rem" }}>
                Software Engineer
              </p>
              <p className="slogan-text">motivated integrity visionary</p>
              <p>
                Passionate in visual designs and creating interactive websites
              </p>
              <Stack
                className="mt-3 justify-content-center justify-content-md-start "
                direction="horizontal"
                gap={3}
              >
                <a
                  href="https://github.com/ridwanrahmn"
                  target="_blank"
                  style={{ color: "#fff", textDecoration: "none" }}
                  className="icon"
                >
                  <i class="fa-brands fa-github fa-2xl"></i>
                </a>
                <a
                  href="https://linkedin.com/in/ridwan-rahmansyah"
                  target="_blank"
                  style={{ color: "#fff", textDecoration: "none" }}
                  className="icon"
                >
                  <i class="fa-brands fa-linkedin fa-2xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/ridwanrahmn_"
                  target="_blank"
                  style={{ color: "#fff", textDecoration: "none" }}
                  className="icon"
                >
                  <i class="fa-brands fa-instagram fa-2xl"></i>
                </a>
              </Stack>
            </Row>
          </Col>
          <Col
            className="px-lg-4 mx-md-0 mx-auto"
            lg={4}
            md={{ span: 5, order: "last" }}
            sm={{ span: 5 }}
            xs={{ span: 5, order: "first" }}
          >
            <Image
              src={myPhoto}
              alt="myPhoto"
              className="mb-md-0 mb-3"
              width="100%"
              style={{ borderRadius: 45 }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
