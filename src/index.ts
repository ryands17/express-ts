import express from 'express'
import { factorial } from 'utils/factorial'

const app = express()

app.listen(3000, () => console.log(`app running at port 3000`))

app.get('/', (req, res) => {
  let f = factorial(10)
  res.send('TS app live!')
})
