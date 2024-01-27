import React from "react"
import "./modal.css"
import { RiCloseLine } from "react-icons/ri"


const Modal = ({ setIsOpen }) => {
    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Dialog</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className="modalContent">
                        Are you sure you want to download this file?
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="acceptBtn" onClick={() => setIsOpen(false)}>
                                Accept
                            </button>
                            <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Modal