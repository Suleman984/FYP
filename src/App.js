import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoginScreen from './Components/Authentication/Login/LoginScreen';
import Signup from './Components/Authentication/SignUp/SignupScreen';
import Authentication from './Components/Authentication/Authentication';
import Homepage from './Components/HomePage/HomepageComponents/Homepage'
import DataComponent from './Components/ExploreBusiness/Datacomponent';


function App() {

  // useEffect(() => {
  // (async () => {
  //   // const dataFetch= await fetch('http://192.168.18.17:3001/get-scrapped-data'); 
  //   const dataFetch = await axios.get('http://192.168.18.17:3001/get-scrapped-data')
  //   console.log(dataFetch.data)
  // })()
   
  // }, [])
  return (
    <div className="App">
      {/* <LoginScreen/> */}
      {/* <Homepage/> */}
      <DataComponent/>
      
    </div>
  );
}

export default App;
