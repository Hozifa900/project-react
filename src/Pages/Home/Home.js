import { Container, Row, Col, Card } from "react-bootstrap";
import "./Home.css";
import SubHome from "./SubHome";
import { useContext } from "react";
import { DataContext } from "../../Data/DataContext";
import Header from "../../Components/Header/Header";
import { NavLink } from "react-router-dom";
import $ from "jquery";
function Home() {
  const [
    user,
    setUser,
    experience,
    setExperience,
    education,
    setEducation,
    skill,
    setSkill,
    token,
    setToken,
  ] = useContext(DataContext);
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row style={{ overflow: "auto", height: "90vh", width: "100%" }}>
          <Col md={12} xs={12}>
            <h1>Home</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
