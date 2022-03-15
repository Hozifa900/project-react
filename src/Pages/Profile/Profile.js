import {
  Table,
  Row,
  Col,
  Container,
  Form,
  Modal,
  Button,
} from "react-bootstrap";
import { useState, useContext } from "react";
import { DataContext } from "../../Data/DataContext";
import "./Profile.css";
import { InputGroup, FormControl } from "react-bootstrap";
import $ from "jquery";
import Header from "../../Components/Header/Header";
import Exp from "./Exp/Exp";

function Covid() {
  const [userModal, setUserModal] = useState(false);

  return (
    <div>
      <Header />
      <Container>
        <Row style={{ overflow: "auto", height: "90vh", width: "100%" }}>
          <Col md={12} xs={12}>
            <Exp />
          </Col>
        </Row>
      </Container>
      <Modal
        show={userModal}
        onHide={() => setUserModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Manageing Users
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="inputGroup-sizing-default"
              style={{ width: "150px" }}
            >
              Sign Nurse:
            </InputGroup.Text>
            <Form.Select id="disabledSelect">
              <option>Select nurse to work on this PCR</option>

              <option>Select nurse to work on this pcr</option>
            </Form.Select>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="inputGroup-sizing-default"
              style={{ width: "150px" }}
            >
              Phone
            </InputGroup.Text>
            <FormControl
              id="edit_phone"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="inputGroup-sizing-default"
              style={{ width: "150px" }}
            >
              Email
            </InputGroup.Text>
            <FormControl
              id="edit_email"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="inputGroup-sizing-default"
              style={{ width: "150px" }}
            >
              Address
            </InputGroup.Text>
            <FormControl
              id="edit_password"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button /* onClick={() => editRowDone()} */>Make edit</Button>
          <Button /* onClick={() => setUserModal(false)} */>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Covid;
