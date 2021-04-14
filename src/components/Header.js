import React from 'react'

import { css } from 'glamor'
import { Link, withRouter } from 'react-router-dom'

import { primary } from '../theme'

class Header extends React.Component {
  render() {
    return (
      <div {...css(styles.header)}>
        <Link
          to='/wall'
          {...css(styles.button)}
        >
          <p {...css(styles.buttonText)}>Wall</p>
        </Link>
        {/* <Link
          to='/users'
          {...css(styles.button)}
        >
          <p {...css(styles.buttonText)}>Users</p>
        </Link> */}
        <Link
          to='/profile'
          {...css(styles.button)}
        >
          <p {...css(styles.buttonText)}>Profile</p>
        </Link>
      </div>
    )
  }
}

const styles = {
  header: {
    height: 50,
    backgroundColor: primary,
    position: 'absolute',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex'
  },
  logo: {
    height: 34,
    paddingLeft: 10
  },
  button: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black'
  },
  buttonText: {
    fontWeight: 500
  }
}

export default withRouter(Header)