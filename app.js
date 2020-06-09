require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("./config/cors.config");
const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const router = require("./config/routes.js");

app.use("/", router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

/**
 * Listen on provided port
 */
const port = normalizePort(process.env.PORT || "5000");
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
	var port = parseInt(val, 10);
	if (isNaN(port)) {
		// named pipe
		return val;
	}
	if (port >= 0) {
		// port number
		return port;
	}
	return false;
}
