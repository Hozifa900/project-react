import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../Data/DataContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "../../App.css";

function Login() {
  const navigate = useNavigate();
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

  const loginUser = () => {
    var email = $("#login-email").val(),
      password = $("#login-password").val();
    $.ajax({
      url: "http://localhost:8888/project/public/api/login",
      type: "post",
      data: {
        email: email,
        password: password,
      },
      beforeSend: function () {
        $("#loader").show();
      },
      headers: {
        Accept: "application/json",
      },
      success: function (data) {
        if (data.code == 200) {
          setTimeout(function () {
            alert(token);
          }, 1000);
          alert(token);
          console.log(user);
          setUser(data.user);
          getExperiences();
          getEducation();
          getSkill();
          navigate("./home", { replace: true });
          $("#login-email").val("");
          $("#login-password").val("");
        } else alert(data.message);

        //console.log(token);
      },
      error: function (error) {
        $("#loader").hide();
        console.log(error);
        alert("something wronge.");
      },
    });
  };

  // This signup function to add user data to database
  const signup = () => {
    var name = $("#signup-name").val(),
      email = $("#signup-email").val(),
      phone = $("#signup-phone").val(),
      password = $("#signup-password").val();
    $.ajax({
      url: "http://localhost:8888/project/public/api/signup",
      type: "post",
      data: {
        name: name,
        email: email,
        phone: phone,
        password: password,
        cv: "cv",
      },
      beforeSend: function () {
        $("#loader").show();
      },
      headers: {
        Accept: "application/json",
      },
      success: function (data) {
        $("#loader").hide();
        alert(data.message);
        $("#signup-name").val("");
        $("#signup-email").val("");
        $("#signup-phone").val("");
        $("#signup-password").val("");
      },
      error: function (error) {
        $("#loader").hide();
        console.log(error);
        alert("something wronge.");
      },
    });
  };

  // This function to fetch getExperiences data from database
  const getExperiences = () => {
    $.ajax({
      url: "http://localhost:8888/project/public/api/get_experience",
      type: "post",
      success: function (data) {
        setExperience(data.data);
        console.log(setExperience);
      },
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      error: function (error) {
        console.log(error);
      },
    });
  };

  // This function to fetch getExperiences data from database
  const getEducation = () => {
    $.ajax({
      url: "http://localhost:8888/project/public/api/get_education",
      type: "post",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      success: function (data) {
        setEducation(data.data);
      },
      error: function (error) {
        console.log(error);
      },
    });
  };

  // This function to fetch getExperiences data from database
  const getSkill = () => {
    $.ajax({
      url: "http://localhost:8888/project/public/api/get_skill",
      type: "post",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      success: function (data) {
        setSkill(data.data);
      },
      error: function (error) {
        console.log(error);
      },
    });
  };

  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }}>
      <br />
      <br />

      <Container id="loginout">
        <Row>
          <Col xs={12} md={5} style={{ float: "right" }}>
            <Card
              id="login"
              style={{
                zIndex: "9999",
                width: "100%",
                height: "",
                backgroundColor: "#4346aa",
                color: "rgb(206, 206, 206)",
                boxShadow: "white 0px 0px 5px 0px",
                borderRadius: "10px",
              }}
            >
              <Card.Header
                style={{
                  background: "#2c2f8b",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <strong>Login</strong>
              </Card.Header>
              <Card.Body>
                <Container fluid>
                  <Row style={{ margin: "10px" }}>
                    <Col xs={12} md={4}>
                      <strong style={{ float: "left", fontSize: "small" }}>
                        <label>Email:</label>
                      </strong>
                    </Col>
                    <Col xs={12} md={8}>
                      <input
                        id="login-email"
                        style={{
                          float: "left",
                          border: "none",
                          borderBottom: "blue solid 1px",
                          backgroundColor: "rgb(206, 206, 206)",
                          width: "100%",
                        }}
                        type="text"
                      />
                    </Col>
                  </Row>

                  <Row style={{ margin: "10px" }}>
                    <Col xs={12} md={4}>
                      <strong style={{ float: "left", fontSize: "small" }}>
                        <label>Password:</label>
                      </strong>
                    </Col>
                    <Col xs={12} md={8}>
                      <input
                        id="login-password"
                        style={{
                          float: "left",
                          border: "none",
                          borderBottom: "blue solid 1px",
                          backgroundColor: "rgb(206, 206, 206)",
                          width: "100%",
                        }}
                        type="password"
                      />
                    </Col>
                  </Row>

                  <Row style={{ margin: "10px" }}>
                    <Col md={4}></Col>
                    <Col xs={12} md={8}>
                      <Button
                        onClick={loginUser}
                        style={{
                          float: "left",
                          width: "100%",
                          backgroundColor: "#2c2f8b",
                        }}
                        variant="primary"
                      >
                        Go
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>

          {/* ---------------------------------------------------------------- */}
          <Col xs={12} md={5} style={{ float: "left" }}>
            <Card
              id="Rigster"
              style={{
                zIndex: "9999",
                width: "100%",
                height: "",
                backgroundColor: "#4346aa",
                color: "rgb(206, 206, 206)",
                boxShadow: "white 0px 0px 5px 0px",
                borderRadius: "10px",
              }}
            >
              <Card.Header
                style={{
                  background: "#2c2f8b",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <strong>Rigster</strong>
              </Card.Header>
              <Card.Body>
                <Container fluid>
                  <Row style={{ margin: "10px" }}>
                    <Col xs={12} md={4}>
                      <strong style={{ float: "left", fontSize: "small" }}>
                        <label>Name:</label>
                      </strong>
                    </Col>
                    <Col xs={12} md={8}>
                      <input
                        id="signup-name"
                        style={{
                          float: "left",
                          border: "none",
                          borderBottom: "blue solid 1px",
                          backgroundColor: "rgb(206, 206, 206)",
                          width: "100%",
                        }}
                        type="text"
                      />
                    </Col>
                  </Row>

                  <Row style={{ margin: "10px" }}>
                    <Col xs={12} md={4}>
                      <strong style={{ float: "left", fontSize: "small" }}>
                        <label>Phone:</label>
                      </strong>
                    </Col>
                    <Col xs={12} md={8}>
                      <input
                        id="signup-phone"
                        style={{
                          float: "left",
                          border: "none",
                          borderBottom: "blue solid 1px",
                          backgroundColor: "rgb(206, 206, 206)",
                          width: "100%",
                        }}
                        type="text"
                      />
                    </Col>
                  </Row>

                  <Row style={{ margin: "10px" }}>
                    <Col xs={12} md={4}>
                      <strong style={{ float: "left", fontSize: "small" }}>
                        <label>Email:</label>
                      </strong>
                    </Col>
                    <Col xs={12} md={8}>
                      <input
                        id="signup-email"
                        style={{
                          float: "left",
                          border: "none",
                          borderBottom: "blue solid 1px",
                          backgroundColor: "rgb(206, 206, 206)",
                          width: "100%",
                        }}
                        type="text"
                      />
                    </Col>
                  </Row>

                  <Row style={{ margin: "10px" }}>
                    <Col xs={12} md={4}>
                      <strong style={{ float: "left", fontSize: "small" }}>
                        <label>Password:</label>
                      </strong>
                    </Col>
                    <Col xs={12} md={8}>
                      <input
                        id="signup-password"
                        style={{
                          float: "left",
                          border: "none",
                          borderBottom: "blue solid 1px",
                          backgroundColor: "rgb(206, 206, 206)",
                          width: "100%",
                        }}
                        type="password"
                      />
                    </Col>
                  </Row>

                  <Row style={{ margin: "10px" }}>
                    <Col md={4}></Col>
                    <Col xs={12} md={8}>
                      <Button
                        onClick={signup}
                        style={{
                          float: "left",
                          width: "100%",
                          backgroundColor: "#2c2f8b",
                        }}
                        variant="primary"
                      >
                        Go
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
