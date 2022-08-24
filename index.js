const express = require('express')
const app = express()
const PORT = 3000

app.get('', (req, res) => {
    const a = 2
    res.send('Hello World')})

app.listen(PORT, ()=> console.log(`Example app listening at http://localhost:${PORT}`))