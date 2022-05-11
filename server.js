const express = require('express')
const remix = require('@remix-run/express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));

app.all('/api/v1/*', (req, res) => res.send('back'))
app.all('/client/*', remix.createRequestHandler({ build: require('./build') }))
app.all('*', (req, res) => res.redirect('/client'))

// DEV MODE
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});