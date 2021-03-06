import React from 'react'
import { css } from 'glamor'

import { primary } from '../theme'

const logo = require('../assets/logo.svg')

const Loading = () => (
  <div {...css(styles.container)}>
    <div {...css(styles.logoWrapper)}>
      <img
        alt='Logo'
        {...css(styles.logo)}
        src={logo}
      />
    </div>
  </div>
)

const styles = {
  container: {
    height: '100vh',  
    backgroundColor: primary
  },
  logoWrapper: {
    display: 'flex',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 60,
    width: 255
  }
}

export default Loading