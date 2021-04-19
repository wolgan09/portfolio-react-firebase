import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export default function Header(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolbar:{
      backgroundColor: "rgba(0,0,0,0.5)",
      textAlign: "center"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  return (

    <AppBar position="sticky" >
      <Toolbar className={classes.toolbar} >
        <Button color="inherit">About</Button>
        <Button color="inherit">Portfolio</Button>
        <Button color="inherit">Skills</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}