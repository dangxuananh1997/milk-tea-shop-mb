import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SnackbarComponent from 'react-native-snackbar-component';

import {
  hideSnackbar,
} from '../actions/snackbar';

class SnackBar extends React.Component {
  componentDidUpdate() {
    const { snackbar } = this.props;
    if (snackbar.visible) {
      this.asyncHideSnackbar();
    }
  }

  async asyncHideSnackbar() {
    const { hideSnackbarProps } = this.props;
    await setTimeout(() => {
      hideSnackbarProps();
    }, 2000);
  }

  render() {
    const { snackbar } = this.props;

    return (
      <SnackbarComponent
        visible={snackbar.visible}
        textMessage={snackbar.text}
        backgroundColor="black"
        messageColor="white"
        actionText="Close"
        accentColor="orange" />
    );
  }
}

function mapStateToProps(state) {
  return {
    snackbar: state.snackbar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideSnackbarProps: bindActionCreators(hideSnackbar, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
