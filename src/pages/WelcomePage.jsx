import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const WelcomePage = props => {
  return (
    <div>
      Welcome
      <div>
        <Link to="/main">Ir a Main</Link>
      </div>
    </div>
  )
}

WelcomePage.propTypes = {

}

export default WelcomePage