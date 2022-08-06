const express = require("express")
const connectDB = require("./database")
const { json } = require("express")
const routes = require("./routes/userRoutes")
require('dotenv').config();
const { PORT } = process.env;

// connect to db
connectDB();

// Initialize express
const app = express();

//seeders
const { seedAdmin } = require('./seeders/admin')
// console.log(seedAdmin());

app.use(json());

// connect to app routes
app.use("/", routes);

// port
const port = process.env.PORT || PORT

// listen to connection
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})