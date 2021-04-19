import React from 'react'

import { css } from 'glamor'
import { Link, withRouter } from 'react-router-dom'
import { primary } from '../theme'

class Wall extends React.Component {
  render() {
    return (
      <div >
        <div {...css(styles.wall)}>
          This page will list all recipe videos
        </div>
        <Link
          to='/wall/addNewRecipie'
          {...css(styles.addButton)}
        >
          <img alt="Add New Recipe" src={require('../assets/addButton.ico').default} />
        </Link>
      </div>

    )
  }
}

const styles = {
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: 5
  },
  button: {
    margin: '100px 0px 0px',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    cursor: 'pointer',
  },
  wall: {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  buttonText: {
    fontWeight: 500
  },
  container: {
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    margin: 0,
    borderBottom: `2px solid ${primary}`,
    paddingBottom: 4
  }
}

export default withRouter(Wall)