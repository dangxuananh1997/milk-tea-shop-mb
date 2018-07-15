import React from 'react';

import { Provider } from 'react-redux';

import store from './src/store';

import Tab from './src/routes/Tab';

export default class App extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <Provider store={store}>
        <Tab />
      </Provider>
    );
  }
}
