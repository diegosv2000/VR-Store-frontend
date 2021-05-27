import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  card: {
    background: 'white',
    border: '1px solid #CFD1D6',
    padding: '1rem',
    width: '19rem',
    borderRadius: '0.35rem',
    textAlign: 'left',
    cursor: 'pointer',
    transition:'.3s',
    '&:hover': {
      border: '1px solid #959EB4',
    },
  },
  titleCard: {
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  sectionCard: {
    fontSize: '0.9rem',
    margin: '0.5rem 0',
    color: '#726B7C',
  },
  imgCard: {
    width: '100%',
    marginTop: '0.5rem',
    '& div': {
      width: '2rem',
      height: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '3px solid #FF0000',
      padding: '0.2rem',
      borderRadius: '100%',
      margin: '0 0 0 auto',
    },
    '& img': {
      height: '100%',
    },
  },
}));

const Card = (props) => {
  const classes = useStyles();
  return (
    <button className={classes.card}>
      <div className={classes.titleCard}>{props.title}</div>
      <div className={classes.sectionCard}>{props.section}</div>

      <div className={classes.imgCard}>
        <div>
          <img src={props.src} alt="imgCard" />
        </div>
      </div>
    </button>
  );
};

export default Card;
