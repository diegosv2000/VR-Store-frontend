import { makeStyles } from '@material-ui/core';
import React from 'react';
import arstore from 'assets/arstore.png';

const useStyles = makeStyles(() => ({
  homeContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    background: 'FF000090',
    padding: '2rem 1rem',
    maxHeight: 'calc(100vh -5rem)',
  },
  homeInfo:{
padding:'2rem'
  },
  homeTitle:{
    fontSize:'6rem',
    fontWeight:'700'
  },
  information:{
    fontSize:'1.3rem',
    fontWeight:'lighter',
    textAlign:'justify',
    margin:'2rem 0 0 '
  },
  experience:{
    fontSize:'1.2rem',
    padding:'0.2rem 1rem',
    border:'none',
    background:'#2DEE7A',
    fontWeight:'500',
    borderRadius:'0.2rem',
    margin:'4rem 0',
    cursor:'pointer'
  }
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
        <button className={classes.experience}>Comenzar experiencia</button>
      </div>
      <div>
        <img width="80%" style={{ float: 'right',borderRadius:'0.3rem' }} src={arstore} alt="ar" />
      </div>
      
    </div>
  );
};

export default Home;
