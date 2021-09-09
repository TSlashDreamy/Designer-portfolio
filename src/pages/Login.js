import React, { useRef, useState } from 'react';
import '../App.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { Link as ReactLink, useHistory } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext';

function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://tflashgamer.github.io/production/#/home">
        danya
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/collection/2393384/)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    color: "#717070",
    textDecoration: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    "&:hover": {
      color: "#333",
      transition: 'all 0.2s ease-in-out',
    },
  },
  text: {
    color: "#0f0f0f",
    cursor: 'default',
    userSelect: 'none',
  },
  inputField: {
      textDecoration: 'none',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#0f0f0f",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#0f0f0f",
    "&:hover": {
        backgroundColor: "#1a1a1a",
    },
    laber: {
        border: 'none',
    },
  },
}));

function Login() {
  const classes = useStyles();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();


  async function handleSubmit(e) {
    e.preventDefault()
    if (emailRef.current.value === "") {
      return setError("Вы не ввели Вашу почту!")
    } else if (passwordRef.current.value === "") {
      return setError("Вы не ввели пароль!")
    } 
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/home")
    } catch {
      setError("Не правильный логин или пароль!")
    }

    setLoading(false)
  }
  return (
    <motion.div
    initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
    >
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Войдите в аккаунт
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              className={classes.inputField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              inputRef={emailRef}
            />
            <TextField
              className={classes.inputField}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              inputRef={passwordRef}
            />
            <Button
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Войти
            </Button>
            {error && <motion.div initial={{ opacity: 0, x: '100vh' }} animate={{ opacity: 1, x: 0 }} className="error">{error}</motion.div>}
            <Grid container>
              <Grid item xs>
                <div className={classes.text} href="https://tflashgamer.github.io/production/#/home" variant="body2">
                  Попали не туда куда хотели? Просто перейдите<ReactLink className={classes.link} to="/home"> на главную страницу :D</ReactLink>
                </div>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </motion.div>
  );
}

export default Login;