import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  ImgSelected: {
    position: 'relative',
    width: '150px',
  },
  name: {
    width: '150px',
    padding: '0.25rem',
    fontSize: '0.8rem',
    border: '1px solid #C4C4C4',
    borderRadius: '5px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  close: {
    width: '1rem',
    height: '1rem',
    background: 'red',
    position: 'absolute',
    top: '-0.5rem',
    right: '-0.5rem',
    border: 'none',
    borderRadius: '100%',
    cursor: 'pointer',
  },
}));

const ImgSelected = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.ImgSelected}>
      <div className={classes.name}>{props.name}</div>
      <button className={classes.close} onClick={props.onClick}></button>
    </div>
  );
};

export default ImgSelected;
