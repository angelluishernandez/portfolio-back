const cors = require("cors");

const corsMiddleware = cors({
	origin: process.env.REACT_APP_API_URL || "http://localhost:3000",
	allowedHeaders: ["Content-Type", "Origin"],
	credentials: true,
});

module.exports = corsMiddleware;
