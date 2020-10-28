import React from 'react';
import { observer } from "mobx-react-lite";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer';

import logo from '../logo.svg';
import useStores from '../stores/useStores';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'flex',
    alignItems:'stretch',
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
    <React.Fragment>
      <Grid container className={classes.root}>
        <Paper elevation={0} className={classes.logocard}>
          <img src={logo} alt="logo" className={classes.logo}/>
          <Typography variant="h4">Ready to start <code>coding</code>?</Typography>
          <p>Window Size: {uiState.windowDimensions.width} x {uiState.windowDimensions.height}</p>
        </Paper>
      </Grid>
      <Footer/>
    </React.Fragment>
  );
})

export default HomePage;