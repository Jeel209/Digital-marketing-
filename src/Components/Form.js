import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Form.css";
import "flatpickr/dist/themes/material_green.css";
import DatePicker from "react-flatpickr";

const ContactForm = () => {
  const [firstname, setFIrstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [isActive, setIsActive] = useState("");

  const onChange = (event) => {
    setFIrstName(event.target.value);
  };

  const onChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const showData = () => {
    console.log("first name: ", firstname);
    console.log("last name: ", lastname);
    console.log("Gender:", gender);
    console.log("Company:", isActive);
    console.log("DOB:", startDate);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const res = await fetch(
      "https://digitalmarketing-37a07-default-rtdb.firebaseio.com/reactdata.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          gender,
          startDate,
          isActive,
        }),
      }
    );
    if (res) {
      setFIrstName({ firstname });
      setLastName({ lastname });
      setGender({ gender });
      setStartDate({ startDate });
      setIsActive({ isActive });
    }
    showData();

    setFIrstName("");
    setLastName("");

    return;
  };

  return (
    <Container className="form" method="POST">
      <h3 className="titleContact">Contact Us</h3>

      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId="validationFormik01">
          <Row className="inputContact">
            <Col>
              <Form.Label>First name</Form.Label>
            </Col>
            <Col>
              <Form.Control
                placeholder="Enter your first name"
                type="text"
                onChange={onChange}
                value={firstname}
                name="firstName"
                required
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="validationFormik02">
          <Row className="inputContact">
            <Col>
              <Form.Label>Last name</Form.Label>
            </Col>
            <Col>
              <Form.Control
                placeholder="Enter your last name"
                type="text"
                onChange={onChangeHandler}
                value={lastname}
                name="lastName"
                required
              />
            </Col>
          </Row>
        </Form.Group>

        <Row>
          <Col>
            <Form.Label>Gender</Form.Label>
          </Col>
          <Col>
            <div className="mb-3" gender={gender} onChange={handleChange}>
              <input type="radio" value="Male" name="gender" /> Male
              <input type="radio" value="Female" name="gender" />
              Female
              <input type="radio" value="Other" name="gender" /> Other
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Label>Date of Birth</Form.Label>
          </Col>
          <Col>
            <DatePicker onChange={setStartDate} value={startDate} />
          </Col>
        </Row>

        <hr />

        <Row>
          <Col>
            <Dropdown className="DropContact" onSelect={setIsActive}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Company-Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu value={isActive}>
                <Dropdown.Item eventKey="AGBiZ Technologies">
                  AGBiZ Technologies
                </Dropdown.Item>
                <Dropdown.Item eventKey="MediaHubs">MediaHubs</Dropdown.Item>
                <Dropdown.Item eventKey="Geekschip">Geekschip</Dropdown.Item>
                <Dropdown.Item eventKey="Shoutnhike">Shoutnhike</Dropdown.Item>
                <Dropdown.Item eventKey="Blue Fountain Media">
                  Blue Fountain Media
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Button
          onClick={onSubmitHandler}
          variant="primary"
          type="submit"
          className="ButtonCSS"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default ContactForm;
