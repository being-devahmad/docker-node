const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.json({ mesage: "Hi, I am node js in container" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`
    )
})