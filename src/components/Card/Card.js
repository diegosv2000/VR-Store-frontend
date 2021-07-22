import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((props) => ({
  card: {
    background: 'white',
    border: '1px solid #CFD1D6',
    padding: '1rem',
    width: '19rem',
    height:'6rem',
    borderRadius: '0.35rem',
    textAlign: 'left',
    transition: '.3s',
    position: 'relative',
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
  delete: {
    background: 'red',
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: '0.7rem',
    position: 'absolute',
    bottom: '0.5rem',
    right: '0.5rem',
    padding: '0.25rem 0.5rem',
    border: 'none',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}));

const Card = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.card} key={props.key}>
      <div className={classes.titleCard}>{props.title}</div>
      <div className={classes.sectionCard}>{props.section}</div>

      <button className={classes.delete} onClick={props.onClick}>Eliminar</button>
    </div>
  );
};

export default Card;
