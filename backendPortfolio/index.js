import express from 'express'
import cors from 'cors'
import about from './JSON/About.json'
import portfolio from './JSON/Portfolio.json'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Funciona!!')
})

app.get('/about', (req, res) => {
    res.json(about)
})

app.get('/portfolio', (req, res) => {
    res.json(portfolio)
})


app.listen(port, () => console.log(`Server on: ${port}`))
