import React, { useEffect } from "react";
import useStorageHome from "../../../hooks/home/useStorageHome";
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {

    const { url, progress } = useStorageHome(file);

    useEffect(() => {
        if (url){
            setFile(null);
        }
    }, [url, setFile])

  return (
      <div className="progressbar-box">
  <motion.div className="progress-bar" 
  initial={{ width: 0 }}
  animate={{ width: progress + "%" }}
  ></motion.div>
  </div>
  )
};

export default ProgressBar;
