import { ApplicationProvider ,IconRegistry } from '@ui-kitten/components';

import * as eva from '@eva-design/eva';
import React from 'react';


import Signup from './screens/Signup';
import Login from './screens/Login';



const App = () => {
  return (
    <>
 
     <ApplicationProvider {...eva} theme={eva.light}>

      <Signup/>
      {/* <Login/> */}

     </ApplicationProvider>
    </>
  );
};

export default App;



