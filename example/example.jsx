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