import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import useForm from "react-hook-form";
import "../App.css";

export default function Forms(props) {
  const { register, handleSubmit } = useForm();
  const [Mshow, setMshow] = useState(false);
  const handleShow = () => {
    setMshow(true);
  };
  const handleClose = () => {
    setMshow(false);
  };
  const Submit = values => {
    console.log(values);
    setMshow(false);
  };

  return (
    <div className="header-card">
      <Button variant="primary px-5 mt-4 mx-4 mb-1" onClick={handleShow}>
        ເພີ່ມ
      </Button>
      <Modal className="lao-font" show={Mshow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ເພີ່ມລາຍຈ່າຍ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(Submit)} id="form1">
            <Form.Group>
              <Form.Label>{props.name} :</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder={props.name}
                ref={register}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{props.price} :</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder={props.price}
                ref={register}
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
