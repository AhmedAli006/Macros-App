import { ApplicationProvider ,IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import React from 'react';
import Signup from './screens/Signup';
import Login from './screens/Login';
import MainScrn from './screens/MainScrn';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


const App = () => {
  return (
    <>
 
<IconRegistry icons={EvaIconsPack} />
     <ApplicationProvider {...eva} theme={eva.light}>
      {/* <Signup/> */}
      {/* <Login/> */}
      <MainScrn/>

     </ApplicationProvider>
    </>
  );
};

export default App;



