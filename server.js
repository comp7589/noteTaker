const express = require("express");
//need to create:
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());//a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.
app.use(express.urlencoded({ extended: true })); //If extended is false, you can not post "nested object"
app.use(express.static("public"));
app.use("/api", apiRoutes); //if localhost/api navigate to api routes
app.use("/", htmlRoutes); // if localhost navigates to htmlroutes

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));



