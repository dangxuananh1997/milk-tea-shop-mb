import React from 'react';

import { Font } from 'expo';

import { Provider } from 'react-redux';

import store from './src/store';

import Tab from './src/routes/Tab';

const sourceSanProLight = require('./assets/fonts/SourceSansPro-Light.ttf');
const sourceSanProRegular = require('./assets/fonts/SourceSansPro-Regular.ttf');

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'source-sans-pro-light': sourceSanProLight,
      'source-sans-pro-regular': sourceSanProRegular,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Tab />
      </Provider>
    );
  }
}
