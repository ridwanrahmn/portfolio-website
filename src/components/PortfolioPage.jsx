import { Container, Row, Col, Carousel, Image, Modal } from "react-bootstrap";
import { useState } from "react";

import portfolio1 from "../assets/Portfolio-1.jpg";
import portfolio2 from "../assets/Portfolio-2.png";
import portfolio3 from "../assets/Portfolio-3.png";

const portfolioData = [
  {
    id: 1,
    title: "myNotes App",
    description:
      "myNotes App is a simple app that allows you to save notes. You can add, delete, and archive your notes. It also includes a search feature that makes it easy to find the notes you want to view.",
    pict: portfolio1,
    source: "https://github.com/ridwanrahmn/mynotes-apps",
    demo: "https://mynotes-app-rr.netlify.app/",
  },
  {
    id: 2,
    title: "myBookshelf App",
    description:
      "myBookshelf App is an app for organizing books. Features available are book input, book search and book filter which whether the book has been read or not.",
    pict: portfolio2,
    source: "https://github.com/ridwanrahmn/mybookshelf-apps",
    demo: "https://ridwanrahmn.github.io/mybookshelf-apps/",
  },
  {
    id: 3,
    title: "BurgerKill App",
    description:
      "BurgerKill App is a UI design project for mobile apps. The design carried is a dark theme with a combination of one other color, so it still seems minimalist.",
    pict: portfolio3,
    source:
      "https://www.figma.com/file/5BEtNDeQE6MgkqFSyZs1sy/BurgerKill-App?type=design&node-id=3%3A2&mode=design&t=qsu3R4HdfrI4MJgj-1",
    demo: "",
  },
];

const ModalWindow = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="text-center">
        <Image src={props.pict} width="100%" />
      </Modal.Body>
    </Modal>
  );
};

const CarouselImage = ({ pict, onModal }) => {
  return (
    <Col className="text-start mx-auto" lg={5} md={6}>
      <Image
        src={pict}
        width="100%"
        style={{ cursor: "pointer" }}
        onClick={onModal}
      ></Image>
    </Col>
  );
};

const CarouselSubContent = ({ title, description, source, demo }) => {
  return (
    <Col className="text-start pe-lg-5" lg={7} md={6}>
      <Row className="px-3 text-lg-start text-md-start text-center">
        <h5 className="fw-bold p-0 mt-md-0 mt-3">{title}</h5>
        <p className="p-0" style={{ textAlign: "justify" }}>
          {description}
        </p>
        <div className="p-0">
          <a href={source} target="_blank">
            <button
              type="button"
              className="primary-btn mt-1"
              style={{ backgroundColor: "#2C5BD6", width: "fit-content" }}
            >
              Source
            </button>
          </a>
          <a href={demo} target="_blank">
            {title !== "BurgerKill App" ? (
              <button
                type="button"
                className="primary-btn mt-1 mx-3"
                style={{ backgroundColor: "#D6362C", width: "fit-content" }}
              >
                Demo
              </button>
            ) : null}
          </a>
        </div>
      </Row>
    </Col>
  );
};

const CarouselContent = ({ id, title, description, pict, source, demo }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Row className="p-5" key={id} data-aos="fade-up">
        <CarouselImage pict={pict} onModal={() => setModalShow(true)} />
        <CarouselSubContent
          title={title}
          description={description}
          source={source}
          demo={demo}
        />
      </Row>
      <ModalWindow
        pict={pict}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      data-bs-theme="dark"
      className="ps-lg-5"
    >
      {portfolioData.map((data) => (
        <Carousel.Item key={data.id}>
          <CarouselContent {...data} key={data.id} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const PortfolioPage = () => {
  return (
    <Container id="portfolio" className="portfolio">
      <Row className="text-center">
        <h1 data-aos="fade-up">Portfolio</h1>
        <Col
          className="mx-auto mt-3"
          style={{ backgroundColor: "#fff" }}
          data-aos="fade-up"
        >
          <ControlledCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default PortfolioPage;
