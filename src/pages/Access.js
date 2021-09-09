import React, { useState } from "react";
import { Link, useHistory  } from 'react-router-dom';
import '../App.css';
import { motion } from 'framer-motion';

function Access() {


  const [click, setClick] = useState(false);
  
  const history = useHistory();
  
  function Letout() {
    setClick(true);
    setTimeout(function() {
      history.push("/home")
    }, 1500);
    
  }

  return (
    <motion.div className="entryBody"
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    style={{ width: click ? '0' : '', height: click ? '0' : '' }}
    >
    <motion.div className="entryCard"
    initial={{ height: 0, width: 0 }}
    animate={{ height: '500px', width: '60vw' }}
    transition={{ delay: 2 }}
    style={{ opacity: click ? '0' : '1' }}
    >
      <motion.h2 className="entryText"
      style={{ opacity: click ? '0' : '1' }}
      >Ого! Кажется Вы попали в неизведанное раньше место. Давайте выбираться от сюда :D</motion.h2>
      <motion.div className="entrySquare"
      initial={{ x: "-20vh" }}
      animate={{ x: "150vh", rotate: 360 }}
      transition={{ repeat: Infinity, duration: 7 }}
      style={{ opacity: click ? '0' : '1' }}
      ></motion.div>
      <motion.div className="entrySquare"
      initial={{ x: "-20vh" }}
      animate={{ x: "150vh", rotate: 360 }}
      transition={{ delay: 1, repeat: Infinity, duration: 7 }}
      style={{ opacity: click ? '0' : '1' }}
      ></motion.div>
       <motion.div className="entrySquare"
      initial={{ x: "-20vh" }}
      animate={{ x: "150vh", rotate: 360 }}
      transition={{ delay: 2, repeat: Infinity, duration: 7 }}
      style={{ opacity: click ? '0' : '1' }}
      ></motion.div>
      <motion.div
      initial={{ x: '-100%', y: '0' }}
      animate={{ x: "50%", transform: 'translate(-50%, -50%)' }}
      transition={{ delay: 2, duration: 7 }}
      style={{ opacity: click ? '0' : '1' }}
      ><Link onClick={Letout} className="entryButton" style={{ opacity: click ? '0' : '1' }}>Выбраться от сюда</Link></motion.div>
    </motion.div>
    </motion.div>
  )
}

export default Access