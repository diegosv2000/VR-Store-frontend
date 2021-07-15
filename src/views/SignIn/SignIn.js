import React, { useState } from 'react';
import { InputForm } from 'components';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';

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

const SignIn = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    dni: '',
    name: '',
    contact: '',
    email: '',
    password: '',
  });
  const setInput = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const [registered, setRegistered] = useState(false);
  const sendData = (e) => {
    e.preventDefault();
    console.log(data);
    let dataUser = JSON.stringify({
      DNI: data.dni,
      Name: data.name,
      Contact: data.contact,
      Email: data.email,
      Password: data.password,
    });

    const config = {
      method: 'post',
      url: 'https://raumented.herokuapp.com/api/addSeller',
      headers: {
        'Content-Type': 'application/json',
      },
      data: dataUser,
    };

    axios(config)
      .then(function (response) {
        let res = JSON.stringify(response.data);
        console.log(JSON.stringify(response.data));
        alert(res);
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
            label="DNI"
            placeholder="76685214"
            type="text"
            name="dni"
            setData={setInput}
          />
          <InputForm
            label="Nombre Completo"
            placeholder="Miguel Andrade"
            type="text"
            name="name"
            setData={setInput}
          />
          <InputForm
            label="Contacto"
            placeholder="+51 987 654 321"
            type="text"
            name="contact"
            setData={setInput}
          />
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
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default SignIn;
