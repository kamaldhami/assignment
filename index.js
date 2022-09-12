require('dotenv').config();
const app = require('./loaders/app')
const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
    console.log(`Server is up ${PORT}`)
});