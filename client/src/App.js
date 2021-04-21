import React from 'react';
import { Provider } from 'react-redux'
import DogCards from "./components/DogCards"
import {loadDogs, getDogs} from "./store/dogs"
import configureStore from "./store/configureStore"
import './App.css';
import * as actions from "./store/apiActionCreators"


const store = configureStore()


store.dispatch(
  loadDogs()
)

function App() {
  return (
    <>
     <Provider store={store}>
       <DogCards/>
     </Provider>
    
    </>
  );
}

export default App;
