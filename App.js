import React,{ useState } from 'react';
import { Provider } from 'mobx-react';
import {
  StyleSheet,View,Text
} from 'react-native';
import RootNavigate from './app/components/Navigate/RootNavigate'
import rootStore from './app/api/store/RootStore';

const App = () => {
  return (
    <Provider rootStore={rootStore}>
      <RootNavigate />
    </Provider>
  );
};

export default App;
