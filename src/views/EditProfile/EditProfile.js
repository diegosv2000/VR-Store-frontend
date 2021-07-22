import React, { useEffect, useState } from 'react';
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
    minWidth: '35rem',
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
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
    textAlign: 'left',
    margin: '2rem auto 0',
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

const EditProfile = () => {
  const classes = useStyles();
  const [data, setData] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem('idSeller'));
  useEffect(() => {
    let firstConfig = {
      method: 'get',
      url: `https://raumented.herokuapp.com/api/getSeller/${userId}`,
      headers: {},
    };

    axios(firstConfig)
      .then(function (response) {
        setData({
          dni: response.data.DNI,
          name: response.data.Name,
          contact: response.data.Contact,
          email: response.data.Email,
          password: response.data.password,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const setInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const sendData = (e) => {
    e.preventDefault();
    console.log(data);

    const newData = JSON.stringify({
      DNI: data.dni,
      Name: data.name,
      Contact: data.contact,
      Email: data.email,
      Password: data.password,
    });

    const newConfig = {
      method: 'put',
      url: `https://raumented.herokuapp.com/api/editSeller/${userId}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: newData,
    };

    axios(newConfig)
      .then(function (response) {
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  if (data) {
    return (
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <h2 className={classes.titleForm}>Editar perfil</h2>
          <div className={classes.inputContent}>
            <InputForm
              label="DNI"
              placeholder="73452158"
              type="text"
              name="dni"
              setData={setInput}
              defaultValue={data.dni}
            />
            <InputForm
              label="Nombre Completo"
              placeholder="Miguel Andrade"
              type="text"
              name="name"
              setData={setInput}
              defaultValue={data.name}
            />
            <InputForm
              label="Contacto"
              placeholder="+51 994 155 456"
              type="text"
              name="contact"
              setData={setInput}
              defaultValue={data.contact}
            />
            <InputForm
              label="Email"
              placeholder="example@gmail.com"
              type="email"
              name="email"
              setData={setInput}
              defaultValue={data.email}
            />
            <InputForm
              label="Contraseña"
              placeholder="******"
              type="password"
              name="password"
              setData={setInput}
              defaultValue={data.password}
            />
          </div>
          <button className={classes.buttonForm} onClick={sendData}>
            Registrarse
          </button>
        </div>
      </div>
    );
  } else {
    return <div>Cargando</div>;
  }
};

export default EditProfile;
