import React from "react";


//The modal window has two functions. It opens on click and closes on the Xbtn
const Modal = ({ data, onClose }) => {
    if(!data._id) return null
    return (
    <div className="modalpage">
        <div className="modalwindow">

            <p onClick={onClose} className="closebtn">X</p>
            <p className="namemodal">{data.sender.name}</p>
            <p className="comment">{data.comment}</p>
            <a href={data.url} className="url">GitHub or Figma link</a> 
            <br></br>
            <a href={data.liveVersion} className="live">Live link</a>
        </div>
    </div>
    )
}

export default Modal