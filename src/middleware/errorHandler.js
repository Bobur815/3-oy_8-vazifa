export default function ErrorHandler(err, req, res, next) {
    res.status(err.status || 500).json({
        success: false,
        error: err.name || "ServerError",
        message: err.message || "Internal Server Error"
    });
}

