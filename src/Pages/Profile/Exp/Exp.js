import { Card, Modal, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import Sub from "./Sub";
import { DataContext } from "../../../Data/DataContext";
import { InputGroup, FormControl } from "react-bootstrap";
import $ from "jquery";
import Header from "../../../Components/Header/Header";

function Exp() {
  const [userModal, setUserModal] = useState(false);
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
    useredit,
    setUseredit,
  ] = useContext(DataContext);

  return (
    <Card>
      <Card.Header>Experiences</Card.Header>
      <Card.Body>
        <Card.Text>
          {experience.data.map((data) => (
            <Sub
              title={data.title}
              company={data.company}
              started={data.started}
              industry={data.industry}
            />
          ))}
        </Card.Text>
        <Button variant="primary">Add new one</Button>
      </Card.Body>
    </Card>
  );
}

export default Exp;
