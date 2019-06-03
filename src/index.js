import React from 'react'
import { render } from 'react-dom'
import Quadrant from './Quadrant'
import Mouse from './Mouse'
import Coordinates from './Coordinates'
import PositionIndicator from './PositionIndicator'
import './style.css'

const App = () => (
  <React.Fragment>
    <Mouse
      render={receivedState => (
        <Quadrant bgColor="pink">
          <Coordinates {...receivedState} />
          <PositionIndicator {...receivedState} />
        </Quadrant>
      )}
    />
    <Mouse
      render={receivedState => (
        <Quadrant bgColor="#666">
          <Coordinates {...receivedState} />
          <PositionIndicator {...receivedState} color="white" />
        </Quadrant>
      )}
    />
    <Mouse
      render={receivedState => (
        <Quadrant bgColor="powderblue">
          <Coordinates {...receivedState} />
          <PositionIndicator {...receivedState} color="blue" />
        </Quadrant>
      )}
    />
    <Mouse
      render={receivedState => (
        <Quadrant bgColor="yellow">
          <Coordinates {...receivedState} />
          <PositionIndicator {...receivedState} color="goldenrod" />
        </Quadrant>
      )}
    />
  </React.Fragment>
)

render(<App />, document.getElementById('root'))
