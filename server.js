require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/config/db')
const PORT = process.env.PORT || 5000
const cors = require('cors')

connectDB();

app.use(cors())

app.listen(PORT, () => {
    console.log('server started on port', PORT)
})


