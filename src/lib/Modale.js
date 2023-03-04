import React from "react";
import "./modale.css";
import exitIcon from "./exit.png"

function Modale(props) {
    return (
        <div id="confirmation" className="modal">Employee Created!
            <img src={exitIcon} alt="" onClick={() => props.closeModal()} className="modal-exit" />
        </div>
    )
}

export default Modale;