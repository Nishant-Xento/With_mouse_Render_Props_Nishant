import React from 'react'
import PropTypes from 'prop-types'

const spanStyle = {
  display: 'block',
  fontSize: `${12 / 16}rem`,
  lineHeight: '1.5',
  textAlign: 'center'
}
class Coordinates extends React.Component {
  render() {
    return (
      <div>
        <span style={spanStyle}>
          Coordinates: <br />
          {`{ x: ${this.props.x}, y: ${this.props.y} }`}
        </span>
      </div>
    )
  }
}

Coordinates.PropTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default Coordinates
