import React from 'react'

class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  offset = {
    x: 0,
    y: 0
  }

  componentDidMount() {
    this.getOffset()
    window.addEventListener('resize', this.getOffset)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getOffset)
  }

  getOffset = () => {
    const rect = this.node.firstChild.getBoundingClientRect()
    this.offset = {
      x: Math.floor(rect.left),
      y: Math.floor(rect.top)
    }
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX - this.offset.x,
      y: e.clientY - this.offset.y
    })
  }

  render() {
    return (
      <span onMouseMove={this.handleMouseMove} ref={node => (this.node = node)}>
        {this.props.render(this.state)}
      </span>
    )
  }
}

export default Mouse
