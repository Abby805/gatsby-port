import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <h1
      style={{ width: `100px` }}
    >
      <Link 
        to="/"
        style={{ display: `block`, lineHeight: `0` }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 30">
          <title>{siteTitle}</title>
          <polygon points="75 30 62.5 30 56.25 20 50 30 43.75 20 37.5 30 25 30 18.75 20 12.5 30 0 30 18.75 0 31.25 20 43.75 0 50 10 56.25 0 75 30"/>
        </svg>
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
