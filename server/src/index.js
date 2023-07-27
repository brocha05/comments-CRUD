const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const testRoutes = require('./routes/test.routes')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(testRoutes)
app.use((err, req, res, next) => {
    return res.json({message: err.message})
})

app.listen(3000, () => console.log("App running on port 3000"))