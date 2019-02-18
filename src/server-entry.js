import createApp from './app.js'

const vm = createApp(PHP.context)

renderVueComponentToString(vm, (err, res) => {
  const html = renderPageWithTemplate(res)
  PHP.utility.__call("writeFile", [html])
})

function renderPageWithTemplate(markup) {
  return PHP.template.replace('<!--vue-ssr-outlet-->', markup)
}