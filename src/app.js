// Creation and configuration of the Express APP
const express = require("express");
const cors = require("cors");
const { databaseErrorMiddleware } = require("./middlewares/error.middleware");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/api"));

// 404 handler
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use(databaseErrorMiddleware);

app.use((err, req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = status === 500 ? "Internal server error" : err.message;

    console.error(`[${req.method}] ${req.originalUrl}`, err);

    res.status(status).json({ message });
});

module.exports = app;
