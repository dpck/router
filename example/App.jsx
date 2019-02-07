import Router, { Link } from '../src'
import { render } from 'preact'

const Main = () => (
  <div>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/search/example/hello">Search</Link></li>
    </ul>
    <Router onChange={(e) => {
      if (e.current && e.current.attributes.title) {
        document.title = e.current.attributes.title
      }
    }}>
      <Home path="/" title="@depack/router" />
      <About path="/about" title="About" />
      <Search path="/search/:query/:optional?" title="Search" />
    </Router>
  </div>
)

const Home = () => <div>
  <h3>Home</h3>
  Preact Router For Depack.
</div>
const About = () => <div>
  <h3>About</h3>
  <p><em>Preact</em> is a library for making single-page
  websites and rendering JSX components.</p>
  <p><em>Depack</em> is front-end bundler that uses Google
  Closure Compiler (as well as back-end package compiler).</p>
</div>
const Search = ({ optional }) => <div>
  <h3>Search</h3>
  {optional}
</div>

render(<Main />, document.querySelector('#preact'))