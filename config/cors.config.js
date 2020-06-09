const cors = require("cors");

const corsMiddleware = cors({
	origin: "https://angelluishernandez.herokuapp.com",
	allowedHeaders: ["Content-Type", "Origin"],
	credentials: true,
});

module.exports = corsMiddleware;
