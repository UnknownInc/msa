import React from 'react';
import { observer } from "mobx-react-lite";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import logo from '../logo.svg';
import useStores from '../stores/useStores';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  logocard:{
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign:'center'
  },
  logo:{
    width:'40vmin'
  }
}));

const HomePage = observer(()=>{
  const classes = useStyles();
  const {uiState} = useStores();

  return (
    <Grid container className={classes.root}>
      <Paper elevation={3} className={classes.logocard}>
        <img src={logo} alt="logo" className={classes.logo}/>
        <Typography variant="h4">Ready to start <code>coding</code>?</Typography>
        <p>Window Size: {uiState.windowDimensions.width} x {uiState.windowDimensions.height}</p>
      </Paper>
    </Grid>
  );
})

export default HomePage;