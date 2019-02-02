import express from 'express'
import { factorial } from 'utils/factorial'

const app = express()

app.listen(3000, () => console.log(`app running on port 3000`))

app.get('/', (_, res) => {
  let f = factorial(10)
  res.send(`10! = ${f}`)
})
