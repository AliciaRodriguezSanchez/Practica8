// Server creation and configuration
const http = require("node:http");

// Config .env
require("dotenv").config();

const app = require("./src/app");

// Server creation
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

const normalizePort = (port) => {
    const parsedPort = Number.parseInt(port, 10);

    return Number.isNaN(parsedPort) ? port : parsedPort;
};

const handleServerError = (error) => {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind =
        typeof normalizePort(PORT) === "string"
            ? `Pipe ${PORT}`
            : `Port ${PORT}`;

    switch (error.code) {
        case "EACCES":
            console.error(`${bind} requires elevated privileges.`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`${bind} is already in use.`);
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const handleUnexpectedError = (error) => {
    console.error("Unexpected error:", error);
    process.exit(1);
};

// Listeners
server.on("listening", () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on("error", handleServerError);

process.on("uncaughtException", handleUnexpectedError);
process.on("unhandledRejection", handleUnexpectedError);
