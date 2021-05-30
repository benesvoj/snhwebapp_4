import React from "react";
import "./modal.css";
import ModalForm from "./modalForm"

const Modal = ({ handleClose, show, children, submitClub }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {/* {children} */}
                <div className="modal-header">
                    <h4>Založení nového oddílu</h4>
                </div>
                <div className="modal-content">
                    <ModalForm />
                </div>
                <div className="float-right">
                    <button type="button" className="btn btn-secondary btn-modal" onClick={handleClose}>Zrušit</button>
                    <button type="button" className="btn btn-primary btn-modal" onClick={handleClose}>Vytvořit</button>
                </div>
            </section>
        </div>
    );
};

export default Modal;
