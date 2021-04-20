import './App.css';
import './index.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import $ from "jquery";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



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
 const classes = {}

 
  return (
    <div className="">
      { state ?  
      <div className={classes.main}>
        <Header data={state.resumeData.main} />
        <main>
        <About data={state.resumeData.main} />
        <Portfolio data={state.resumeData.portfolio} />
        <Contact data={state.resumeData.main} />
        <Footer data={state.resumeData.main} />
        </main>
      </div> : null }
    </div > 
  );
}

export default App;
