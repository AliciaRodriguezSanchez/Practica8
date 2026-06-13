const fs = require("node:fs/promises");
const path = require("node:path");

const logsDir = path.join(process.cwd(), "logs");
const mysqlLogFile = path.join(logsDir, "mysql-errors.log");

const isMysqlError = (error) => {
    return Boolean(error?.code?.startsWith("ER_") || error?.sqlState);
};

const logMysqlError = async (error, req) => {
    if (!isMysqlError(error)) {
        return;
    }

    const logEntry = {
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.originalUrl,
        code: error.code,
        errno: error.errno,
        sqlState: error.sqlState,
        sqlMessage: error.sqlMessage,
        message: error.message,
    };

    await fs.mkdir(logsDir, { recursive: true });
    await fs.appendFile(mysqlLogFile, `${JSON.stringify(logEntry)}\n`);
};

module.exports = {
    logMysqlError,
};
