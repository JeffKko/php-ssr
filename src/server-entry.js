import createApp from './app.js'

const vm = createApp()

// server side only
renderVueComponentToString(vm, (err, res) => {

  const html = `
  <!DOCTYPE html>
  <html lang="zh-hant-tw">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>v8 test</title>
      <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">ホーム</a></li>
        <li class="breadcrumb-item"><a href="/goods">買う</a></li>
        <li class="breadcrumb-item active">【元麻布農園】 手作り豆腐キット いいね！</li>
      </ol>
      ${res}
    </body>
  </html>
  `

  PHP.context.__call("writeFile", [html])
})