import Router from '../src'
import { render } from 'preact'

const Main = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
    // Advanced is an optional query
    <Search path="/search/:query/:advanced?" />
  </Router>
)

render(<Main />, document.body)