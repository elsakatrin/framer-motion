import React from "react";
import {motion, AnimatePresence} from "framer-motion"

//The modal window has two functions. It opens on click and closes on the Xbtn
const Modal = ({ data, onClose }) => {
    
    
    return (
        <AnimatePresence>
            {data._id?(
    <motion.div className="modalpage"
    initial={{ opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.7}}
    exit={{opacity: 0}}
    >
        <div className="modalwindow">

            <p onClick={onClose} className="closebtn">X</p>
            <p className="namemodal">{data.sender.name}</p>
            <p className="titlemodal">{data.assignment.Title}</p>
            <p className="comment">{data.comment}</p>
            <a href={data.url} className="url">GitHub or Figma link</a> 
            <br></br>
            <a href={data.liveVersion} className="live">Live link</a>
        </div>
    </motion.div>):null}
    </AnimatePresence>
    )
}

export default Modal