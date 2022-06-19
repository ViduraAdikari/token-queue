import React from 'react';
import {Provider} from "react-redux";
import './App.css';
import Layout from "./view/Layout";
import {store} from "./store";

function App() {
  return (
    <Provider store={store}>
      <Layout prefersDarkMode={true}/>
    </Provider>
  );
}

export default App;
