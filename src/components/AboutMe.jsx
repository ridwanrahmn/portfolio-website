import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const skillData = [
  {
    id: 1,
    title: "Graphic Design",
    color: "#16B24B",
    icon: "fa-solid fa-bezier-curve",
    description:
      "Create a design by applying visual hierarchy and page layout techniques. Experienced in image tracing and photo editing.",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Corel Draw"],
  },
  {
    id: 2,
    title: "Frontend Development",
    color: "#D62C2C",
    icon: "fa-solid fa-code",
    description:
      "Create and develop interactive websites by paying attention to user friendly design, website optimization and clean code development.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"],
  },
  {
    id: 3,
    title: "UI/UX Design",
    color: "#8B2CD6",
    icon: "fa-regular fa-object-group",
    description:
      "Minimalist and user-friendly layout design. Create unique, simple and clean designs.",
    skills: ["Figma", "Adobe XD"],
  },
];

const Tag = ({ children }) => {
  return <p className="tag my-1 mx-1 ">{children}</p>;
};

const CustomToggle = ({ children, eventKey, color, icon }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <div>
      <button
        type="button"
        className="primary-btn"
        style={{ backgroundColor: color }}
        onClick={decoratedOnClick}
      >
        <span className="mx-2">
          <i class={icon}></i>
        </span>
        {children}
      </button>
      <p
        className="mt-2 my-auto"
        style={{
          color: "#cecece",
          fontStyle: "italic",
          fontSize: "0.8rem",
          letterSpacing: "1px",
        }}
      >
        Click for details
      </p>
    </div>
  );
};

const AccordionCard = ({ children, color, title, icon }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Card style={{ border: "none" }}>
        <Card.Header style={{ backgroundColor: "#fff", border: "none" }}>
          <CustomToggle eventKey="1" color={color} icon={icon}>
            {title}
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body style={{ textAlign: "justify" }}>{children}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

const AboutIntro = () => {
  return (
    <>
      <h1 data-aos="fade-up">About Me</h1>
      <Col
        className="mt-3 mx-auto p-4 card-box"
        lg={8}
        xs={11}
        data-aos="fade-up"
      >
        <p style={{ textAlign: "justify" }}>
          Recent graduate who is enthusiastic and detail-oriented with a strong
          knowledge in software development technologies, including HTML, CSS,
          JavaScript, and React. Creativity to develop engaging user
          experiences, dedicated in visual design, and problem solving skills. A
          fast learner with a desire to stay updated on technological
          developments in the industry and committed to providing the best
          solutions for high quality software development.
        </p>
        <a href="https://drive.google.com/uc?id=13It9NNqav4gJFoRciNCvTeNp4xi1En8Q&export=download">
          <button
            type="button"
            className="primary-btn mt-2"
            style={{ backgroundColor: "#2C5BD6" }}
          >
            Download CV
          </button>
        </a>
      </Col>
    </>
  );
};

const SkillSet = () => {
  return (
    <Row
      className="mt-5 mx-auto text-center justify-content-center"
      md={2}
      data-aos="fade-up"
    >
      {skillData.map((data) => (
        <Col lg={4} key={data.id}>
          <AccordionCard {...data}>
            {data.description}
            <br></br>
            <Row className="mx-auto mt-3 justify-content-center">
              {data.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </Row>
          </AccordionCard>
        </Col>
      ))}
    </Row>
  );
};

const AboutMe = () => {
  return (
    <Container id="about" className="about-me text-center">
      <Row>
        <AboutIntro />
        <SkillSet />
      </Row>
    </Container>
  );
};

export default AboutMe;
