
export class ValidationError extends Error {
    constructor(status = 400, message = "Validation Error") {
        super(message);
        this.name = "ValidationError";
        this.status = status;
    }
}
