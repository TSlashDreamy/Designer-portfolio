import React, { useState } from "react";
import "./../../../App.css";
import ProgressBar from "./ProgressBarAds";
import { motion } from 'framer-motion';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const UploadForm = () => {

  
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];
  
  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Пожалуйста, выберите изображение (.jpg или .png)");
    }
  };

  return (
    <form>
      <Tooltip TransitionComponent={Zoom} title="Загрузить работу" arrow>
      <motion.label
      initial={{ scale: 1, background: '#00000000', color: '#0f0f0f' }}
      whileHover={{ scale: 1.25, background: '#0f0f0f', color: '#ffffff' }}
      transition={{ type: 'spring', stiffness: 100, mass: 1.4}}
      >
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </motion.label>
      </Tooltip>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
        {file && (
          <div className="file-uploading">{"Вы загружаете " + file.name}</div>
        )}
      </div>
    </form>
  );
  
};
export default UploadForm;