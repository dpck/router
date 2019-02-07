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
import core from '@idio/core'
import render from 'preact-render-to-string'

(async () => {
  const { url } = await core({
    frontend: { directory: ['example', 'src'] },
    serve(ctx) {
      ctx.body = '<!doctype html>' + render(<html>
        <head>
          <style>
            {`.active {
              font-weight: bold;
            }`}
          </style>
          <title>Router Example</title>
        </head>
        <body id="preact">
          <script type="module" src="example/App.jsx"/>
        </body>
      </html>)
    },
  })
  console.log(url)
})()
```

If there is an error rendering the destination route, a 404 will be displayed.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>
      © <a href="https://artd.eco">Art Deco</a> for <a href="https://artd.eco/depack">Depack</a>
      2019
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif" alt="Tech Nation Visa" />
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks">Tech Nation Visa Sucks</a>
    </th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>