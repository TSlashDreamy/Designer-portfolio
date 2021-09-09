import React, { useState } from 'react';
import '../../App.css';
import '../../css/Links.css';
import 'animate.css/animate.min.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-scroll';
import Snackbar from '@material-ui/core/Snackbar';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { faListAlt, faImage, faIdCard, } from '@fortawesome/free-regular-svg-icons';
import { Link as ReactLink, useHistory } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { fas, faKey, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MuiAlert from '@material-ui/lab/Alert';
library.add(fab, fas, faTelegram, faEnvelope, faListAlt, faImage, faIdCard, faKey, faUserCircle);

const useStyles = makeStyles((theme) => ({
    // Корневой div
    menuBackground: {
        transition: 'all 0.3s ease-in-out', 
    },
    logo: {
      marginRight: '5px',
      cursor: 'pointer',
    },
    // Кнопка меню
    menuButton: {
      color: 'black',
      transition: 'all 0.3s ease-in-out', 
    },
    menuButtons: {
        transition: 'all 0.3s ease-in-out', 
    },
    login: {
      color: 'black',
      fontSize: '20px',
      marginRight: '5px',
    },
    // Текст лого
    logoTitle: {
      flexGrow: 1,
      color: 'black',
      cursor: 'default',
      userSelect: 'none',
    },
    root: {
      flexGrow: 1,
      color: '#ffffffd6',
      '&$selected': {
        color: '#ffffff',
      },
    },
      mobileMenu: {
        backgroundColor: '#0f0f0f',
        borderRadius: '4px',
        height: 'auto',
      },
  }));
  
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function CategoriesNavbar() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEla, setAnchorEla] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const openAccountMenu = Boolean(anchorEla);
    const [open, setOpen] = React.useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuAccount = (event) => {
      setAnchorEla(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };
  
    const handleCloseAccountMenu = () => {
      setAnchorEla(null);
    };
  
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const [copied, setCopied] = useState(false);  
    
   
  
    var link = window.location.href;
    const afterlink = link.replace('/production#/', '/production#/danyasignupcooperationHzGkeaAU0hXYpn-');
    const cooplink = afterlink.split("-");

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
      setOpenSuccess(false);
    };
  
    const [state] = React.useState({
      vertical: 'top',
      horizontal: 'right',
    });
  
    const { vertical, horizontal } = state;
  
    const [error, setError] = useState("");
    const [notify, setNotify] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();
  
    function copy() {
        navigator.clipboard.writeText(cooplink[0])
        setCopied(true);
        setNotify("Ссылка для сотрудника скопирована!");
        setOpenSuccess(true);
      }

    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Не удалось выйти!")
      }
    }

    return (
        <>
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          Вы уже на главной странице
        </Alert>
      </Snackbar>
      {error && <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>}
      {notify && <Snackbar anchorOrigin={{ vertical, horizontal }} open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {notify}
        </Alert>
      </Snackbar>}
        <AppBar position="static" className="menuBackground">
        <Toolbar>
          <Typography variant="h5" className={classes.logoTitle}>
          <ReactLink class='links menu-link' to="/home"><FontAwesomeIcon icon={["fab", "dyalog"]} className={classes.logo}/>
            danya
            </ReactLink>    
          </Typography>
            <div>
          {currentUser ? <>
          <IconButton edge="start" className={classes.login} color="inherit" aria-label="menu" onClick={handleMenuAccount}>
          <FontAwesomeIcon icon={["fas", "user-circle"]} className={classes.moreIcon}/>
          </IconButton>
          <Menu
          className={classes.menuButtons}
          id="menu-account"
          anchorEl={anchorEla}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openAccountMenu}
          onClose={handleCloseAccountMenu}
       
        >
          <MenuItem disabled>Email: {currentUser.email}</MenuItem>
          <a className="links" href="https://console.firebase.google.com/"><MenuItem>Консоль</MenuItem></a>
          <MenuItem onClick={copy}>{!copied ? "Ссылка для добавления\nсотрудника " : "Ссылка скопирована🔗"}</MenuItem>
          <MenuItem onClick={handleLogout}>Выйти</MenuItem>

        </Menu>
        </>  
          : 
          <Tooltip TransitionComponent={Zoom} placement="left" title="Я - владелец сайта" arrow>
              <ReactLink to="/login">
            <IconButton edge="start" className={classes.login} color="inherit" aria-label="menu" onclick={handleClick}>
            <FontAwesomeIcon icon={["fas", "key"]} className={classes.moreIcon}/>
          </IconButton>
          </ReactLink>
          </Tooltip>
        }
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openMenu}
                onClose={handleCloseMenu}
             
              >
                <ReactLink class='links menu-link' to="/home">
              <MenuItem onClick={handleCloseMenu}>Главная</MenuItem>
              </ReactLink>
              <Link
                onClick={handleCloseMenu}
                to="works"
                spy={true}
                smooth={true}
              >
                <MenuItem>Работы</MenuItem>
              </Link>
              <Link
                onClick={handleCloseMenu}
                to="contacts"
                spy={true}
                smooth={true}
              >
                <MenuItem>Контакты</MenuItem>
              </Link>
                
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
      </>
    )
}

export default CategoriesNavbar;