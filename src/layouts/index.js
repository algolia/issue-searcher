import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/Header/Header'

import '../styles/normalize.css'
import '../styles/global.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>issue-searcher</title>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
    </Helmet>
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
