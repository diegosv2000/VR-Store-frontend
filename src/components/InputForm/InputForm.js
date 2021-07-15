import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    color: '#1F1D21',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  input: {
    padding: '0.5rem',
    border: '1px solid #CFD1D6',
    borderRadius: '0.2rem',
    boxShadow: 'inset 0px 1px 4px rgba(0, 0, 0, 0.2)',
    transition: '.3s',
    '&:hover': {
      border: '1px solid #4B0483',
      boxShadow: 'inset 0px 1px 4px rgba(0, 0, 0, 0)',
    },
    '&:focus': {
      border: '1px solid #4B0483',
      boxShadow: 'inset 0px 1px 4px rgba(0, 0, 0, 0)',
    },
  },
}));

const InputForm = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <label className={classes.label}>{props.label}</label>
      <input
        className={classes.input}
        onChange={props.setData}
        onKeyUp={props.setData}
        onBlur={props.setData}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
      />
    </div>
  );
};

export default InputForm;
