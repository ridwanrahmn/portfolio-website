import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const portfolioData = [
  {
    id: "Edu-1",
    part: "Education",
    icon: "fa-solid fa-graduation-cap fa-xl",
    title: "Telecommunication Engineering",
    subtitle: "Politeknik Negeri Bandung",
    year: "2019 - 2023",
    description:
      "Programming, algorithms and data structures, database system, software development.",
  },
  {
    id: "Exp-1",
    part: "Experience",
    icon: "fa-solid fa-briefcase fa-xl",
    title: "Antenna Engineer",
    subtitle: "Internship",
    year: "2022 - 2023",
    description:
      "Design a microstrip antenna using software, create a mini automatic program to calculate antenna parameters.",
  },
  {
    id: "Exp-2",
    part: "Experience",
    title: "Vector Designer",
    subtitle: "Freelance",
    year: "2018 -2020",
    description:
      "Create, develop and delivery vector designs according to client requirements.",
  },
];

const filtered = portfolioData.filter(
  (value, index, self) =>
    self.findIndex((v) => ["part"].every((k) => v[k] === value[k])) === index
);

const AccordionTitle = ({ eventKey, title }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () => null);

  return (
    <div onClick={decoratedOnClick} style={{ cursor: "pointer" }}>
      <p className="fw-bold lh-sm">{title}</p>
      <p
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

const AccordionCard = ({ title, part, index }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Card style={{ border: "none" }}>
        <Card.Header
          style={{
            backgroundColor: "#fff",
            border: "none",
            padding: 0,
          }}
        >
          <AccordionTitle title={title} eventKey="1" />
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body
            style={{
              backgroundColor: "#fff",
              border: "none",
              padding: 0,
              marginBottom: 15,
            }}
          >
            {part === part &&
              portfolioData
                .filter((data) => data.part === part)
                .map((data) => (
                  <p className="lh-base" key={data.description}>
                    {data.description}
                  </p>
                ))[index]}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

const QualificationSubContent = ({ title, subtitle, year, part, index }) => {
  return (
    <Row
      className={
        part === "Education" ? "text-lg-end mt-4" : "text-lg-start mt-4"
      }
      style={{ lineHeight: 0.5 }}
      data-aos="fade-up"
    >
      <Col>
        <AccordionCard title={title} part={part} index={index} />
        <div className="mt-1">
          <p style={{ color: "#6D6D6D" }}>{subtitle}</p>
          <p style={{ color: "#6D6D6D" }}>{year}</p>
        </div>
      </Col>
    </Row>
  );
};

const QualificationContent = ({ part, icon }) => {
  return (
    <Col
      className={
        part === "Education"
          ? "mt-3 p-4 text-center text-sm-end mx-auto"
          : "mt-3 p-4 text-center text-sm-start mx-auto"
      }
      lg={6}
      md={6}
      sm={6}
      style={{ height: "fit-content" }}
      data-aos="fade-up"
    >
      <i class={icon} color="#000"></i>
      <p className="fw-bold my-1">{part}</p>

      {part === part &&
        portfolioData
          .filter((data) => data.part === part)
          .map((data, index) => (
            <QualificationSubContent {...data} index={index} key={data.id} />
          ))}
    </Col>
  );
};

const Qualification = () => {
  return (
    <Container className="qualification text-center">
      <Row>
        <h1 data-aos="fade-up">Qualification</h1>
        {filtered.map((data) => (
          <QualificationContent {...data} key={data.title} />
        ))}
      </Row>
    </Container>
  );
};

export default Qualification;
