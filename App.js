import React from 'react';
import AppChild from './AppChild';
import { Provider } from 'react-redux';
import store from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppChild />
    </Provider>
  )
}

export default App;