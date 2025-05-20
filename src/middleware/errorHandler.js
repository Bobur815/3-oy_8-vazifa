import logger from "../logs/log.js";

export default function ErrorHandler(err, req, res, next) {
    const statusCode = err.status || 500;
    const errorName = err.name || "ServerError";
    const errorMessage = err.message || "Internal Server Error";
    const errorStack = err.stack.split("\n").slice(0,2).join("\n") || "No stack trace available";
    
    logger.error(`[${req.method} ${req.url}] ${errorName}: ${errorMessage}\nStack: ${errorStack}`);

    res.status(err.status || 500).json({
        success: false,
        error: err.name || "ServerError",
        message: err.message || "Internal Server Error"
    });
}

