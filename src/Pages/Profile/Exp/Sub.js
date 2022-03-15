import { Card, Modal, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { DataContext } from "../../../Data/DataContext";
import $ from "jquery";

function Sub(props) {
  const [userModal, setUserModal] = useState(false);

  return (
    <div style={{ border: "1px solid black" }}>
      <table>
        <tr>
          <td>Job Title</td>
          <td>{props.title}</td>
        </tr>
        <tr>
          <td>Company Name</td>
          <td>{props.company}</td>
        </tr>
        <tr>
          <td>Started AT</td>
          <td>{props.started}</td>
        </tr>
        <tr>
          <td>Industry</td>
          <td>{props.industry}</td>
        </tr>
        <tr>
          <td>
            <Button size="sm">Delete</Button>
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default Sub;
