
import { useState, useEffect } from "react"
import Modal from "./components/modal/modal.js"
import {motion} from "framer-motion"

//Here are all my functions 
function App() {
  const [openModal, setOpenModal] = useState({});
  const [projects, setProjects] = useState([]);
  //Using useEffect here so the code only runs once. I'm using async and await so I can allow the whole page to load even if it takes more time to load the API data
  useEffect(() =>{
    const getData = async ()=> {
      //fetching the API here
    const gallery = await fetch ("https://tskoli-intranet-api-h7.vercel.app/api/V1/gallery")
    const data = await gallery.json();
    console.log(data)
    setProjects(data)

  }
  getData();
},[])


console.log(setProjects)

//Not everyone put a picture or a screenshot into their assignment so when the image comes up as an error then this code runs so we won't end up with an empty image 
const skipImage = (e)=>{
  e.target.src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
}


//After the return comes the JSX. 
//The Modal is my component. In there I have this Open and Close functions. 
//Projects.map is the map function that maps out the API array
//The Key I'm using is used to help react identify which items have changed, are added or are removed. Keys are given to the elements inside the array to give the elements a stable identity. It's best to have keys that have unique ID so I used the _id from the array. It's the ID of induvitual assignments
//The <modal> is my component - it's a modal or a popup window
  return (
    <>
      <motion.h1 className="header"
            initial={{opacity: 0, y: -200}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.7, ease: "linear", type: "spring"}}
      >Recommended for gallery</motion.h1>
      <motion.p className="subheader"
            initial={{opacity: 0, y: -200}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.7, ease: "linear", type: "spring"}}
      >Projects from students 2022</motion.p>

      <Modal data={openModal} onClose={() => setOpenModal(false)}></Modal> 
      <div className="main-container">
       {projects.map(project=>{
        return (
          <div className="innerclass" key={project._id}>
          <motion.div onClick={() => setOpenModal(project)} className="card"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9}}
          >
            <img onError={skipImage} className="image" src={project.imageOrGif}></img>
            <p className="name">{project.sender.name}</p>
            <p className="title">{project.assignment.Title}</p>
          </motion.div>
          </div>
        )
       })}

      </div>


    </>
  );
}

export default App;

