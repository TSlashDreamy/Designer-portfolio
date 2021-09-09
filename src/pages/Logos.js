import React, { useState } from "react";
import "../App.css";
import "../css/Links.css";
import "animate.css/animate.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from './components/CategoriesNavbar';
import Typography from "@material-ui/core/Typography";
import { Link } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FaAngleUp } from 'react-icons/fa';
import UploadForm from "./components/logos/UploadFormLogos";
import ImageGrid from "./components/logos/ImageGridLogos";
import Modal from "./components/Modal";
import Footer from './components/Footer';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useAuth } from "../contexts/AuthContext";
import { faListAlt, faImage, faIdCard } from '@fortawesome/free-regular-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
library.add(fab, fas, faListAlt, faImage, faIdCard);

function Logos() {
  const useStyles = makeStyles((theme) => ({
    // Корневой div
    logo: {
      marginRight: "5px",
    },
    // Кнопка меню
    menuButton: {
      color: "black",
    },
    // Текст лого
    logoTitle: {
      flexGrow: 1,
      color: "black",
    },
    categoriesHeader: {
      margin: 25,
      backgroundColor: "#0f0f0f",
      height: "50vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "4px",
    },
    categoriesText: {
      color: "white",
      fontFamily: "Roboto",
      paddingLeft: "20px",
      paddingRight: "20px",
      textAlign: "center",
    },
    root: {
      flexGrow: 1,
      color: '#ffffffd6',
      '&$selected': {
        color: '#ffffff',
      },
    },
    selected: {},
  
      // Корневой div
      button: {
        backgroundColor: '#0f0f0f',
        color: 'white',
        borderRadius: '50%',
        maxWidth: '50px',
        maxHeight: '50px',
        minWidth: '50px',
        minHeight: '50px',
        fontSize: '15px',
        transition: 'all 0.3s',
        '&:hover': {
          backgroundColor: '#0f0f0f',
          transition: 'all 0.3s',
          transform: 'scale(0.92)',
          }
      },
      
      mobileMenu: {
        backgroundColor: '#0f0f0f',
        borderRadius: '4px',
        height: 'auto',
      },
  }));

  const classes = useStyles();

  const { currentUser } = useAuth();
  const [visible, setVisible] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [pc, setPc] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    };

    if (window.innerWidth <= 600) {
      setMobile(true)
      setPc(false)
    } else if ( window.innerWidth > 600 ) {
      setMobile(false)
      setPc(true)
    };
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  const [value] = React.useState('recents');

  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedDB, setSelectedDB] = useState(null);
  const [selectedImgID, setSelectedImgID] = useState(null);

  return (
    <div className={classes.root}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
       <div className="up-button-box"
        style={{opacity: visible ? '1' : '0'}}
        >
          
          <Tooltip TransitionComponent={Zoom} title="В начало" arrow>
            <Button className={classes.button} onClick={scrollToTop}
             style={{display: pc ? 'inline-block' : 'none'}}
            >
            <FaAngleUp />
            </Button>
            </Tooltip>
            <BottomNavigation value={value}
                
  showLabels className={classes.mobileMenu}
            style={{display: mobile ? 'inline-block' : 'none'}}
            >
              <Link to="works" spy={true} smooth={true}>
                <BottomNavigationAction classes={{root: classes.root, selected: classes.selected,}} label="Работы" icon={<FontAwesomeIcon icon={["fas", "image"]} />} />
              </Link>
              <Link to="contacts" spy={true} smooth={true}>
              <BottomNavigationAction classes={{root: classes.root, selected: classes.selected,}} label="Контакты" icon={<FontAwesomeIcon icon={["fas", "id-card"]} />} />
              </Link>
              <Link to="toppage" spy={true} smooth={true}>
              <BottomNavigationAction classes={{root: classes.root, selected: classes.selected,}} label="Вверх" icon={<FaAngleUp />} />
              </Link>
            </BottomNavigation>
        </div>
        <div id="toppage"></div>
      
      <Navbar />

      <ScrollAnimation animateIn="fadeInDown">
        <div className={classes.categoriesHeader}>
          <Typography variant="h4" className={classes.categoriesText}>
            Логотипы
          </Typography>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInDown">
    {currentUser ? <UploadForm /> : <>:D</>}
      </ScrollAnimation>
      <div id="works"></div>
      <ImageGrid setSelectedImg={setSelectedImg} setSelectedDB={setSelectedDB} setSelectedImgID={setSelectedImgID} />
      {selectedImg && <Modal 
      selectedImg={selectedImg} setSelectedImg={setSelectedImg} 
      selectedDB={selectedDB} setSelectedDB={setSelectedDB} 
      selectedImgID={selectedImgID} setSelectedImgID={setSelectedImgID}
      exit={{ opacity: 0 }}
      />} 
      <div id="contacts"></div>
      <Footer />
    </div>
  );
}

export default Logos;
