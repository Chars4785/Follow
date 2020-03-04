import React,{ useState } from 'react';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import {
  StyleSheet,View,Text
} from 'react-native';
import RootNavigate from './app/components/Navigate/RootNavigate'
import reducer from './reducers'

const store = createStore(reducer)

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigate />
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
