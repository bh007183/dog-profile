const path = require("path");
const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose")

// Sets up the Express App
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
// corsOptions

// Static directory
// app.use(express.static("public"));
/////////////////////////////////
const placeholder = require("./routes/puppy-routes.js")

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/puppy-data",
     { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false 
    });



// Routes
// =============================================================

app.use(placeholder)

// Syncing our sequelize models and then starting our Express app
// =============================================================

// Change force: to true if it's cool for the site to remove database items.

  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
