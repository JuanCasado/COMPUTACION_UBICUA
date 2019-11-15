import express from "express"
import mongoose from 'mongoose'
import bp from 'body-parser'
const app = express()
const port = 80

app.get("/", (req, res) => {
  console.log(req)
  res.send(req)
})

app.listen(port)