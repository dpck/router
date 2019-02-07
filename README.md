# @depack/router

[![npm version](https://badge.fury.io/js/%40depack%2Frouter.svg)](https://npmjs.org/package/@depack/router)

`@depack/router` is The Preact Router Component For Compilation With Depack.

```sh
yarn add -E @depack/router
```

The original source code is from https://github.com/developit/preact-router but it was modified to be able to compile front-ends that use it with Depack using Google Closure Compiler.

> *Connect your Preact components up to that address bar.*

> `preact-router` provides a <Router /> component that conditionally renders its children when the URL matches their path. It also automatically wires up <a /> elements to the router.

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [Router](#router)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function and named functions:

```js
import Router, { Link } from '@depack/router'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## Router

```jsx
import Router from '@depack/router'
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
```

If there is an error rendering the destination route, a 404 will be displayed.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

<Footer
  client="Depack"
  clientLink="https://artd.eco/depack">

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>