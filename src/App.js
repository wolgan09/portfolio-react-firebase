import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import $ from "jquery";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { makeStyles } from '@material-ui/core';

function App() {
  const [state, setstate] = useState();

  const getResumeData = () => {
    $.ajax({
      url: "./resume.json",
      dataType: "json",
      success: function(data) {
        setstate({ resumeData: data });
      },
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
    
  };
  useEffect(() => {
    getResumeData();
  },[])
 
  const useStyles = makeStyles((theme) => ({
    main:{
      backgroundColor:"black",
      color:"white"
    }
  }));
  const classes = useStyles();
 
  return (
    <div>
      { state ?  
      <div className={classes.main}>
        <Header data={state.resumeData.main} />
        <About data={state.resumeData.main} />
        <Portfolio data={state.resumeData.portfolio} />
        <Contact data={state.resumeData.main} />
        <Footer data={state.resumeData.main} />
      </div> : null }
    </div > 
  );
}

export default App;
