import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import firebases from "../firebase";

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Mshow: false
    };
  }
  Submit = values => {
    var date = new Date();
    firebases
      .firestore()
      .collection(this.props.coll)
      .add({ ...values, date })
      .then(() => {
        alert("ບັນທຶກສຳເລັດ");
        this.setState({ Mshow: false });
      });
  };
  handleShow = () => {
    this.setState({ Mshow: true });
  };
  handleClose = () => {
    this.setState({ Mshow: false });
  };

  render() {
    return (
      <div className="header-card">
        <Button variant="primary px-3 mt-4 mx-4 mb-1" onClick={this.handleShow}>
          ເພີ່ມ <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Modal
          className="lao-font"
          show={this.state.Mshow}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>ເພີ່ມ{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handleSubmit(this.Submit)} id="form1">
              <Form.Group>
                <Form.Label>{this.props.name} :</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder={this.props.name}
                  ref={this.props.register}
                  setValue={this.props.setValue}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>{this.props.price} :</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder={this.props.price}
                  ref={this.props.register}
                  setValue={this.props.setValue}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
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
}
