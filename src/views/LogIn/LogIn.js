import React from 'react';
import { InputForm } from 'components';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  formContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    border: '1px solid #EAEBED',
    margin: '4rem 0',
    padding: '2rem 3rem',
    minWidth: '22.5rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
  },
  titleForm: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color:'#1F1D21'
  },
  inputContent: {
    display: 'grid',
    gridGap: '1rem',
    textAlign: 'left',
  },
  buttonForm: {
    padding: '0.3rem 0.6rem',
    fontSize: '0.9rem',
    fontWeight: '600',
    border: 'none',
    background: '#4B0483',
    color: 'white',
    borderRadius: '0.2rem',
    margin: '3rem 0 1rem',
    cursor: 'pointer',
  },
}));

const LogIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.formContainer}>
      <form className={classes.form}>
        <h2 className={classes.titleForm}>Iniciar Sesión</h2>
        <div className={classes.inputContent}>
          <InputForm
            label="Email"
            placeholder="example@gmail.com"
            type="email"
          />
          <InputForm label="Contraseña" placeholder="******" type="password" />
        </div>
        <button className={classes.buttonForm}>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LogIn;
