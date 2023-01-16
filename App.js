import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/config';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/styles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
