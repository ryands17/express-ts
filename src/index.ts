import './config'
import express from 'express'
import helmet from 'helmet'
import { factorial } from 'utils/factorial'

const app = express()
const PORT = Number(process.env.PORT)
app.use(helmet())

app.listen(PORT, () => console.log(`app running on port ${PORT}`))

app.get('/', (_, res) => {
  let f = factorial(10)
  res.send(`10! = ${f}`)
})
