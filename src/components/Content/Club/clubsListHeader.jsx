import React, { Component, useState } from "react";
import ModalForm from "./NewClub/modalForm"
import ModalComponent from "./NewClub/modalBS"

class ClubsListHeader extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         show: false
    //     };
    //     this.showModal = this.showModal.bind(this);
    //     this.hideModal = this.hideModal.bind(this);
    // }

    // showModal = () => {
    //     this.setState({ show: true });
    // };

    // hideModal = () => {
    //     this.setState({ show: false });
    // };

    constructor(props) {
        super(props);

        this.state = {
                show: false,
                title: "",
                body: "",
            }
    }

    handleShow = () => {

        this.setState({
            show: true,
            title: "Založení nového oddílu",
            body: "Formulář pro založení nového oddílu.",
            data: "test"
        });
    };

    handleClose = () => {
        // alert(fromModal.msg);

        this.setState({
            show: false
        });
    };

    render() {
        return (
            <main>
                {/* <Modal show={this.state.show} handleClose={this.hideModal} /> */}
                <ModalComponent
                    show={this.state.show}
                    title={this.state.title}
                    // body={this.state.body}
                    body={this.state.body}
                    data={this.state.data}
                    onClick={this.handleClose}
                    onHide={this.handleClose}
                />

                <div className="content-header">
                    <h2 className="content-header-title">Přehled oddílů</h2>
                    {/* <button type="button" className="btn btn-primary btn-sm btn-content-header" onClick={this.showModal}>Nový oddíl</button> */}
                    <button type="button" className="btn btn-primary btn-sm btn-content-header" onClick={this.handleShow}>Nový oddíl BS</button>
                </div>
            </main>
        );
    }

}

export default ClubsListHeader;