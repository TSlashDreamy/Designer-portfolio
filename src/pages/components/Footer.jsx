import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) => ({
      // footer background
    footerBack: {
      background: '#0f0f0f',
      height: 'auto',
      width: '100%',
      borderRadius: '4px',
      marginTop: '50px',
    },
    footerBox: {
      margin: '25px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1',
      position: 'relative',
    },
      // footer heading text
    contactsHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'left',
      position: 'relative',
      marginTop: '30px',
      marginBottom: '30px',
      fontSize: 'calc(20px + 2vw)',
      fontWeight: '100',
  
    },
    contactLine:{
      marginLeft: '40px',
      marginRight: '40px',
      color: '#2f2f2f',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    footerLogo: {
      marginRight: '10px',
      fontSize: 'calc(15px + 2vw)',   
    },
    footerIcons: {
      marginRight: '10px',
    },
  }));

const Footer = () => {
    const classes = useStyles();

 return (
<ScrollAnimation delay={1000} offset={50} animateIn="fadeInUp">
  <footer className={classes.footerBox}>
        <div id="footer" className={classes.footerBack}>
          <div>
            <Typography className={classes.contactsHeader} variant="h3">
            <FontAwesomeIcon icon={["fab", "dyalog"]} className={classes.footerLogo}/>
            danya
            </Typography> 
</div>
<div><hr className={classes.contactLine}></hr></div>
        <div className="footerLinkBox">
          <div>
        <a className="footerLinks" href="https://vk.com/emptied_head">
            <FontAwesomeIcon icon={["fab", "vk"]} className={classes.footerIcons}/>
            VK
            </a> 
            </div>
            <div>
            <a className="footerLinks" href="https://t.me/Fryvoker">
            <FontAwesomeIcon icon={["fab", "telegram"]} className={classes.footerIcons}/>
            Telegram
            </a> 
            </div>
            <div>
            <a className="footerLinks" href="https://discordapp.com/users/522687034243153922/">
            <FontAwesomeIcon icon={["fab", "discord"]} className={classes.footerIcons}/>
            Discord
            </a> 
            </div>
            <div>
            <a className="footerLinks" href="mailto:fryvoker@gmail.com">
            <FontAwesomeIcon icon={["fas", "envelope"]} className={classes.footerIcons}/>
            Gmail
            </a> 
            </div>
        </div>
        <p className="copyright">
        © Copyright. All rights belongs to Danya 2021-2022.
          </p>
          <p className="designed">Designed and created by <a className="link" href="https://tflashgamer.github.io">/TSlash</a> ©</p>
        </div>
        </footer>
        </ScrollAnimation>
 )
}

export default Footer;