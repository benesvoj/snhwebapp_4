import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'

import "./modal.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalForm from "./modalForm";

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            club: {
                clubId: "",
                clubName: ""
            },
            collectedClubData: []
        };
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState(prevState => ({
            club: { ...prevState.club, [name]: value }
        }));
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.setState(prevState => ({
            collectedClubData: [...prevState.collectedClubData, prevState.club],
          club: { clubId: "", clubName: "" }
        }));
      };

    render() {
        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={() => this.props.onHide()}
                    // dialogClassName="full-screen-modal"
                    // sizes xl, lg, sm
                    size="xl"
                >

                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.body}
                        <ModalForm 
                            handleChange={this.handleChange}
                            club={this.state.club}
                            // handleSubmit={this.handleSubmit}
                        />
                    </Modal.Body>

                    <Modal.Footer>

                        <Button
                            variant="secondary"
                            onClick={() => this.props.onClick()}>
                            Zrušit
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={this.handleSubmit}>
                            Uložit
                        </Button>

                    </Modal.Footer>

                </Modal>

            </div>
        );
    }
}

export default ModalComponent;