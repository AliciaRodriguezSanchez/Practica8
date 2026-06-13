const { logMysqlError } = require("../utils/error-logger");

const databaseErrors = {
    ER_DUP_ENTRY: {
        status: 409,
        message: "Ya existe un registro con esos datos",
    },
    ER_NO_REFERENCED_ROW_2: {
        status: 400,
        message: "El registro relacionado no existe",
    },
};

const isDatabaseError = (error) => {
    return Boolean(error?.code?.startsWith("ER_") || error?.sqlState);
};

const databaseErrorMiddleware = (err, req, res, next) => {
    if (!isDatabaseError(err)) {
        return next(err);
    }

    const databaseError = databaseErrors[err.code];
    const status = databaseError?.status || 500;
    const message = databaseError?.message || "Error de base de datos";

    console.error(`[${req.method}] ${req.originalUrl}`, err);
    logMysqlError(err, req).catch((logError) => {
        console.error("Error writing MySQL log:", logError);
    });

    res.status(status).json({
        message,
    });
};

module.exports = {
    databaseErrorMiddleware,
};
