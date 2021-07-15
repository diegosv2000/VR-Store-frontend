import React, { useState } from 'react';
import { InputForm } from 'components';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';

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
    color: '#1F1D21',
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
  const history = useHistory();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const setInput = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const sendData = (e) => {
    e.preventDefault();
    console.log(data);

    const dataForm = JSON.stringify({
      Email: data.email,
      Password: data.password,
    });

    const config = {
      method: 'post',
      url: 'https://raumented.herokuapp.com/api/loginSeller',
      headers: {
        'Content-Type': 'application/json',
      },
      data: dataForm,
    };

    axios(config)
      .then(function (response) {
        if (response.data.idSeller) {
          console.log(response.data.idSeller);
          localStorage.setItem('idSeller', response.data.idSeller);
          history.push('/');
          window.location.reload();
        } else {
          alert(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className={classes.formContainer}>
      <form className={classes.form}>
        <h2 className={classes.titleForm}>Iniciar Sesión</h2>
        <div className={classes.inputContent}>
          <InputForm
            label="Email"
            placeholder="example@gmail.com"
            type="email"
            name="email"
            setData={setInput}
          />
          <InputForm
            label="Contraseña"
            placeholder="******"
            type="password"
            name="password"
            setData={setInput}
          />
        </div>
        <button className={classes.buttonForm} onClick={sendData}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LogIn;
