import express from "express"
import mongoose from 'mongoose'
const app = express()
const port = 80

app.get("/", (req, res) => {
  res.send("Hello world Mongo")
})

app.listen(port)