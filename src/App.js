import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Search from './containers/Search';
import Form from './containers/Form';
import List from './containers/List';
import storeCreator from './store';
import { localState, saveState } from "./localStorage";

let store = storeCreator(localState());

store.subscribe(() => {
    saveState(store.getState());
});

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                search by title: <Search searchField="title" />
                search by tags: <Search searchField="tags" />
                <Form />
                <List />
            </div>
        </Provider>
    );
  }
}

export default App;
