import React, { useState } from 'react';
import Logo from 'assets/Logo.svg';
import Hamburger from 'assets/menuBurger.svg';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';
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
  menuBurger: {
    position: 'relative',
  },
  buttonBurger: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    '& img': {
      height: '1rem',
    },
  },
  dropDownMenu: {
    position: 'absolute',
    zIndex: '10',
    top: '1.5rem',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    background: '#FCFCFC',
    padding: '1rem 0',
    borderRadius: '7px',
    boxShadow: '1px 1px 10px rgb(0,0,0,0.12)',
    '& button': {
      width: '100%',
      padding: '0.5rem 1rem',
      background: 'transparent',
      border: 'none',
      fontSize: '1rem',
      textAlign: 'left',
      fontWeight: '500',
      cursor: 'pointer',
      transition: '.2s',
      '&:hover': {
        background: '#EEEEEE',
      },
    },
  },
}));

const Navegation = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [dropMenu, setDropMenu] = useState(false);
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem('idSeller') ? true : false
  );
  const logOut = () => {
    localStorage.removeItem("idSeller")
    history.push('/');
    window.location.reload();
  };
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img src={Logo} alt="logo" />
      </div>
      {/* <nav>
        <button className={classes.logIn} onClick={()=>{history.push("/log-in")}} >Log In</button>
        <button className={classes.signIn} onClick={()=>{history.push("/sign-in")}} >Sign Up</button>
      </nav> */}
      {isAuth ? (
        <div className={classes.menuBurger}>
          <button
            className={classes.buttonBurger}
            onClick={() => {
              setDropMenu(!dropMenu);
            }}
          >
            <img src={Hamburger} alt="menu" />
          </button>
          <nav
            style={dropMenu ? { display: 'flex' } : { display: 'none' }}
            className={classes.dropDownMenu}
          >
            <button onClick={() => history.push('/admin')}>
              Administración
            </button>
            <button onClick={() => history.push('/edit-profile')}>
              Editar Perfil
            </button>
            <button onClick={logOut}>Cerrar Sesión</button>
          </nav>
        </div>
      ) : (
        <nav>
          <button
            className={classes.logIn}
            onClick={() => {
              history.push('/log-in');
            }}
          >
            Log In
          </button>
          <button
            className={classes.signIn}
            onClick={() => {
              history.push('/sign-in');
            }}
          >
            Sign Up
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navegation;
