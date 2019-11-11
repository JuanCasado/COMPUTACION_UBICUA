import express from "express"
import react from 'react'
const app = express()
const port = 80

app.get("/", (req, res) => {
  res.send("Hello world React")
})

app.listen(port)