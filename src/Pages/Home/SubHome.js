import { Card } from "react-bootstrap";
import "./Home.css";
function SubHome(props) {
  return (
    <Card
      className="home-card"
      style={{
        backgroundColor: "#7678b6",
        borderLeft: "#5B5EA6 10px solid",
        color: "white",
        height: "100%",
      }}
    >
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle
          className="mb-2 text-muted"
          style={{ fontSize: "smaller" }}
        >
          <font color="rgb(241, 199, 199)">{props.subtitle}</font>
        </Card.Subtitle>
        <strong className="sub-no">{props.no}</strong>
        <img className="sub-icon" width="40" src={props.src} />
      </Card.Body>
    </Card>
  );
}

export default SubHome;
