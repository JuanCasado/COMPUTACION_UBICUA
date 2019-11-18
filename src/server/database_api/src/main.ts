import express from "express"
import mongoose from 'mongoose'
import bp from 'body-parser'
const app = express()
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))
const port = 80

app.get("/", (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen(port)