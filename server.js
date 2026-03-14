require('dotenv').config()
const PORT = process.env.PORT || 5000
const app = require('./src/app')
const connectDB = require('./src/config/db')



connectDB();


app.listen(PORT, () => {
    console.log('server started on port', PORT)
})


