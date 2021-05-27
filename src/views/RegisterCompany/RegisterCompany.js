import React from 'react';
import { InputForm, TextArea } from 'components';
import Store from 'assets/store.svg';
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
    minWidth: '35rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
  },
  titleForm: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#1F1D21',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& button': {
      padding: '0.4rem 1rem',
      fontWeight: '600',
      background: '#2DEE7A',
      border: 'none',
      borderRadius: '0.3rem',
      margin: '0 1rem',
    },
  },
  profileIMG: {
    width: '2.7rem',
    height: '2.7rem',
    background: '#4B0483',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    '& img': {
      width: '1rem',
    },
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
  textarea: {
    gridColumn: 'span 2 / span 3',
  },
}));

const RegisterCompany = () => {
  const classes = useStyles();
  return (
    <div className={classes.formContainer}>
      <form className={classes.form}>
        <h2 className={classes.titleForm}>Crear Tienda Online</h2>
        <div className={classes.profile}>
          <div className={classes.profileIMG}>
            <img src={Store} alt="profileIMG" />
          </div>
          <button>Subir foto</button>
        </div>
        <div className={classes.inputContent}>
          <InputForm label="Nombre" placeholder="AllTech" type="text" />

          <InputForm label="Teléfono" placeholder="+513011798" type="text" />
          <InputForm
            label="Dirección"
            placeholder="Av. Petit Thouars 4281, Miraflores"
            type="text"
          />
          <InputForm
            label="Sector"
            placeholder="Informática"
            type="text"
          />
          <div className={classes.textarea}>
            <TextArea label="Descripción" placeholder="Altech es una empresa..." type="password" />
          </div>
        </div>
        <button className={classes.buttonForm}>Guardar cambios</button>
      </form>
    </div>
  );
};

export default RegisterCompany;
