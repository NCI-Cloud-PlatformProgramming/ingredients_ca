import React, { Component } from 'react';
import { css } from 'glamor'

import Router from './Router'
import { withAuthenticator } from 'aws-amplify-react'
import { AmplifyTheme } from 'aws-amplify-react';
import { primary } from './theme'

class App extends Component {
  render() {
    return (
      <div {...css(styles.container)}>
        <Router />
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '55px 0px 50px'
  }
}

const authTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    fontSize: 20,
    fontWeight: 500,
    margin: 0,
    borderBottom: `2px solid ${primary}`,
    paddingBottom: 4
  },
  formSection: {
    ...AmplifyTheme.formSection,
    backgroundColor: "white",
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  sectionFooter: {
    ...AmplifyTheme.sectionFooter,
    backgroundColor: "white"
  },
  button: {
    ...AmplifyTheme.button,
    fontWeight: 500,
    position: 'relative',
    margin: '10px 10px 10px',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    cursor: 'pointer'
  }
}

export default withAuthenticator(App, false, [], null, authTheme)