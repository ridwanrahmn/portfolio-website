import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <p
            className="text-md-end text-center my-auto"
            style={{ fontSize: "0.8rem" }}
          >
            Made with 💙 by ridwanrahmn
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
