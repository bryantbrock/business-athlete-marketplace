const express = require('express')
const remix = require('@remix-run/express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));
app.all('*', remix.createRequestHandler({ build: require('./build') }))

// DEV MODE
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});