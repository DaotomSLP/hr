import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Forms(props) {
  const [Mshow, setMshow] = useState(props.modal);
  const handleShow = () => {
    setMshow(true);
  };
  const handleClose = () => {
    setMshow(false);
  };
  return (
    <div className="header-card">
      <Button variant="primary px-3 mt-4 mx-4 mb-1" onClick={handleShow}>
        ເພີ່ມ <FontAwesomeIcon icon={faPlus} />
      </Button>
      <Modal className="lao-font" show={Mshow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ເພີ່ມລາຍຈ່າຍ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.handleSubmit(props.Submit)} id="form1">
            <Form.Group>
              <Form.Label>{props.name} :</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder={props.name}
                ref={props.register}
                setValue={props.setValue}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{props.price} :</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder={props.price}
                ref={props.register}
                setValue={props.setValue}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" form="form1">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
