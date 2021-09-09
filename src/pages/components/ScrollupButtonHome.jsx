import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { FaAngleUp } from 'react-icons/fa';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faListAlt, faImage, faIdCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import {Link} from 'react-scroll';
import './../../App.css'
library.add(fab, fas, faListAlt, faImage, faIdCard);

const useStyles = makeStyles((theme) => ({
  root: {
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

const ScrollupButtonHome = () => {
    const classes = useStyles();
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

    return (
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
    )

}

export default ScrollupButtonHome;