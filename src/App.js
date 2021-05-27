import React from 'react';
import { makeStyles } from '@material-ui/core';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navegation } from 'components';
import './App.css';
const useStyles = makeStyles(() => ({
  containerHome: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
        <Navegation />
        <div className={classes.containerHome}>{renderRoutes(routes)}</div>
      </div>
    </Router>
  );
};

export default App;
