const express = require('express')
const remix = require('@remix-run/express')
const app = express()

app.use(express.static(__dirname + '/public'));
app.all('*', remix.createRequestHandler({ build: require('./build') }))

// DEV MODE
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}!`)
});