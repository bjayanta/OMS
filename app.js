const express = require('express')
const { request, response } = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send("Hello World!")
})

module.export = app