import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectFirestore, projectStorage } from "../../firebase/config";
import { useAuth } from "../../contexts/AuthContext";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const Modal = ({ selectedImg, setSelectedImg, selectedDB, setSelectedDB, selectedImgID, setSelectedImgID }) => {
    const [showImg, setShowImg] = useState(true);
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setShowImg(false);
            setTimeout(() => {
            setSelectedImg(null);
            setSelectedDB(null);
            setSelectedImgID(null);
            }, 100)
        }
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

      const [open, setOpen] = React.useState(false);
    const { currentUser } = useAuth();
    const [state] = React.useState({
        vertical: 'top',
        horizontal: 'right',
      });
    const { vertical, horizontal } = state;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
      setOpen(false);
    }

    function RemoveImg() {

        console.log(selectedDB);
        setShowImg(false);
        setTimeout(() => {
            setSelectedImg(null);
            }, 100)
        try {
        // Удаление файла с БД
        projectFirestore.collection(selectedDB).doc(selectedImgID).delete();
        projectStorage.refFromURL(selectedImg).delete();
        setOpen(true);
        }
        catch {
        setOpen(true);
        }
    }

    return (
        <AnimatePresence>
     { showImg && <motion.div className="backdrop" onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        > 
        { currentUser ? <Tooltip TransitionComponent={Zoom} placement="left" title="Удалить работу из сайта" arrow><DeleteForeverIcon onClick={RemoveImg} className="deleteImg" /></Tooltip>
         : 
         ''}
         <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Произошла ошибка!
        </Alert>
        </Snackbar>
        <motion.img src={selectedImg} alt="t" 
            initial={{ y: '-100vh' }}
            animate={{ y: '-50%', x: '-50%' }}
            exit={{ y: '-100vh' }}
            /> 
        </motion.div>

}
        </AnimatePresence>
    )
}

export default Modal;