import React, { useEffect } from "react";
import useStorageLogo from "../../../hooks/firmstyle/useStorageFirmstyle";
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {

    const { url, progress } = useStorageLogo(file);

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
