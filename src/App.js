import React, { useEffect, useState } from 'react';
import LoginScreen from './Components/Authentication/Login/LoginScreen';
import Signup from './Components/Authentication/SignUp/SignupScreen';
import Authentication from './Components/Authentication/Authentication';
import Homepage from './Components/HomePage/HomepageComponents/Homepage'
import DataComponent from './Components/ExploreBusiness/Datacomponent';


function App() {

  useEffect(() => {
    const dataFetch=fetch('http://192.168.18.17:3000/get-scrapped-data')
    console.log(dataFetch)
  }, [])
  return (
    <div className="App">
      {/* <LoginScreen/> */}
      {/* <Homepage/> */}
      <DataComponent/>
      
    </div>
  );
}

export default App;
