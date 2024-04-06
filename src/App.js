import React from 'react';
import LoginScreen from './Components/Authentication/Login/LoginScreen';
import Signup from './Components/Authentication/SignUp/SignupScreen';
import Authentication from './Components/Authentication/Authentication';
import Homepage from './Components/HomePage/HomepageComponents/Homepage'
import DataComponent from './Components/ExploreBusiness/Datacomponent';
function App() {
  return (
    <div className="App">
      {/* <LoginScreen/> */}
      {/* <Homepage/> */}
      <DataComponent/>
    </div>
  );
}

export default App;
