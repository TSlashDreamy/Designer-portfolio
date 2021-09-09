import React, { useState } from 'react';
import '../App.css';
import '../css/Links.css';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MainNav from './components/Mainnav';
import LogoCard from '../cards/LogoCard';
import PosterCard from '../cards/PosterCard';
import AdCard from '../cards/AdsCard';
import MagazineCard from '../cards/MagazineCard';
import FirmDesignCard from '../cards/FirmDesignCard';
import PixelArtCard from '../cards/PixelartCard';
import Modal from './components/Modal';
import { Grid } from "@material-ui/core";
import {Link} from 'react-scroll';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { FaAngleUp } from 'react-icons/fa';
import { useAuth } from './../contexts/AuthContext';
import { faListAlt, faImage, faIdCard, } from '@fortawesome/free-regular-svg-icons';
import { Link as ReactLink } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { fas, faKey, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UploadForm from './components/home/UploadFormHome';
import Footer from './components/Footer';
import ImageGrid from './components/home/ImageGridHome';
library.add(fab, fas, faTelegram, faEnvelope, faListAlt, faImage, faIdCard, faKey, faUserCircle);

const useStyles = makeStyles((theme) => ({
  // Приветственный div
  welcomeHeader: {
    margin: 25,
    backgroundColor: '#0f0f0f',
    height: '50vh',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: '4px',
  },
  // Приветственный текст
  welcomeText: {
    color: 'white',
    fontFamily: 'Roboto',
    paddingLeft: '20px',
    paddingRight: '20px',
    textAlign: 'center',
    },
    // box categories
  categoriesDiv: {
    marginTop: '7vh',
    marginBottom: '7vh',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
  // categories text
  categoriesText: {
    marginTop: '20px',
    color: 'black',
    fontFamily: 'Roboto'
    },
    media: {
      height: 140,
    },
  gridContainer: {
    paddingLeft: "10vw",
    paddingRight: "10vw",
    overflowY: 'hidden',

  },
 
  moreLine: {
    marginLeft: '45px',
    marginRight: '45px',
    marginTop: '40px',
    color: '#c6c6c6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

export default function MenuAppBar() {
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

  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedDB, setSelectedDB] = useState(null);
  const [selectedImgID, setSelectedImgID] = useState(null);

  window.addEventListener('scroll', toggleVisible);

  const [value] = React.useState('recents');

  return (
    <div className={classes.root}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      {/* Up button */}
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
              <Link to="categories" spy={true} smooth={true}>
                <BottomNavigationAction classes={{root: classes.root, selected: classes.selected,}} label="Категории" icon={<FontAwesomeIcon icon={["fas", "list"]} />} />
              </Link>
              <Link to="lastWorks" spy={true} smooth={true}>
              <BottomNavigationAction classes={{root: classes.root, selected: classes.selected,}} label="Работы" icon={<FontAwesomeIcon icon={["fas", "image"]} />} />
              </Link>
              <Link to="footer" spy={true} smooth={true}>
              <BottomNavigationAction classes={{root: classes.root, selected: classes.selected,}} label="Контакты" icon={<FontAwesomeIcon icon={["fas", "id-card"]} />} />
              </Link>
            </BottomNavigation>
        </div> 
      <MainNav />

      <ScrollAnimation animateIn="fadeInDown">
      <div className={classes.welcomeHeader}>
      <Typography variant="h4" className={classes.welcomeText}>
          Добро пожаловать на сайт - портфолио дизайнера danya
          </Typography>
      </div>
      </ScrollAnimation>

<section class="categories" id="categories">
<div className={classes.categoriesDiv}>
<ScrollAnimation delay={200} animateIn="fadeInDown">
      <Typography variant="h5" className={classes.categoriesText}>
           Категории
          </Typography>
  </ScrollAnimation>
      </div>
  <Grid
      container
      spacing={4}
      className={classes.gridContainer}
  >
    <Grid item xs={12} sm={6} md={4}>
    <ScrollAnimation delay={200} animateIn="fadeInDown">
      <LogoCard />
    </ScrollAnimation>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <ScrollAnimation delay={400} animateIn="fadeInDown">
      <PosterCard />
    </ScrollAnimation>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <ScrollAnimation delay={600} animateIn="fadeInDown">
      <AdCard />
    </ScrollAnimation>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <ScrollAnimation delay={200} animateIn="fadeInUp">
      <MagazineCard />
    </ScrollAnimation>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <ScrollAnimation delay={400} animateIn="fadeInUp">
      <FirmDesignCard />
    </ScrollAnimation>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <ScrollAnimation delay={600} animateIn="fadeInUp">
      <PixelArtCard />
    </ScrollAnimation>
    </Grid>
  </Grid>

<hr className={classes.moreLine}></hr>
<ScrollAnimation delay={200} animateIn="fadeIn">
<ReactLink class='links menu-link' to="/other">
  <a href="/other" class="categories-more">
      Другое 
      <FontAwesomeIcon icon={["fas", "caret-down"]} className={classes.moreIcon}/>
  </a>
  </ReactLink>
  </ScrollAnimation>
</section>

      <section id="lastWorks">
        <div className={classes.categoriesDiv}>
        <ScrollAnimation delay={100} animateIn="fadeInDown">
          <Typography variant="h5" className={classes.categoriesText}>
            Последние работы
          </Typography>
          </ScrollAnimation>
        </div>
        <ScrollAnimation delay={200} animateIn="fadeIn">
        {currentUser ? <UploadForm /> : ':D'}
        <ImageGrid setSelectedImg={setSelectedImg} setSelectedDB={setSelectedDB} setSelectedImgID={setSelectedImgID} />
      {selectedImg && <Modal 
      selectedImg={selectedImg} setSelectedImg={setSelectedImg} 
      selectedDB={selectedDB} setSelectedDB={setSelectedDB} 
      selectedImgID={selectedImgID} setSelectedImgID={setSelectedImgID}
      exit={{ opacity: 0 }}
      />} 
        </ScrollAnimation>
      </section>
    {!selectedImg && <Footer />}
    </div>
  );
}