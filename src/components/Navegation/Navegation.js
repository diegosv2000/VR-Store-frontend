import React from 'react';
import Logo from 'assets/Logo.svg';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '1rem',
  },
  logoContainer: {
    height: '2rem',
    '& img': {
      height: '100%',
    },
  },
  logIn: {
    padding: '0.35rem 1rem',
    borderRadius: '0.3rem',
    border: '1px solid #4B0483',
    backgroundColor: 'white',
    color: '#4B0483',
    fontSize: '1rem',
    marginRight: '1rem',
    cursor: 'pointer',
  },
  signIn: {
    padding: '0.35rem 1rem',
    borderRadius: '0.3rem',
    border: '1px solid #4B0483',
    backgroundColor: '#4B0483',
    color: '#FFFFFF',
    fontSize: '1rem',
    cursor: 'pointer',
  },
}));

const Navegation = (props) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <button className={classes.logIn}>Log In</button>
        <button className={classes.signIn}>Sign Up</button>
      </nav>
    </header>
  );
};

export default Navegation;
