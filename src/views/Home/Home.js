import { makeStyles } from '@material-ui/core';
import React from 'react';
import arstore from 'assets/arstore.png';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    background: 'FF000090',
    padding: '2rem 1rem',
    maxHeight: 'calc(100vh -5rem)',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  },
  homeInfo: {
    padding: '2rem',
    [theme.breakpoints.down('md')]: {
      padding: '0rem',
    },
  },
  homeTitle: {
    fontSize: '6rem',
    fontWeight: '700',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.75rem',
    },
  },
  information: {
    fontSize: '1.3rem',
    fontWeight: 'lighter',
    textAlign: 'justify',
    margin: '2rem 0 0 ',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      margin: '1rem 0 0 ',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.75rem',
    },
  },
  experience: {
    fontSize: '1.2rem',
    padding: '0.2rem 1rem',
    border: 'none',
    background: '#2DEE7A',
    fontWeight: '500',
    borderRadius: '0.2rem',
    margin: '4rem 0',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      margin: '3rem 0',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1.75rem 0',
      fontSize: '1rem',
      padding: '0.15rem 0.75rem',
    },
  },
  imgContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'right',
    '& img': {
      borderRadius: '0.3rem',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <div className={classes.homeInfo}>
        <div className={classes.homeTitle}>
          <div>Tus compras</div>
          <div>a otro nivel!</div>
        </div>
        <div className={classes.information}>
          Sabemos que actualmente no podemos ir a algún establecimiento y estar
          mucho tiempo en ese lugar es por eso que hemos creado RAUMENTED. Es
          una plataforma con tecnología de realidad aumentada para una mejor
          experiencia de usuario. ¿Qué esperas para unirte?
        </div>
        <button
          className={classes.experience}
          onClick={() => {
            alert('Aún no disponible');
          }}
        >
          Comenzar experiencia
        </button>
      </div>
      <div className={classes.imgContainer}>
        <img src={arstore} alt="ar" />
      </div>
    </div>
  );
};

export default Home;
