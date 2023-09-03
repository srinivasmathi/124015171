const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/routes/index");
// const cors = require("cors");

function startServer() {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.listen(8008, () => {
        console.log("Server started on port 8008");
    })

    app.use("/", router);
}

startServer();