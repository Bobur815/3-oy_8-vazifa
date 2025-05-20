

export class ValidationError extends Error {
    constructor(status = 400, message = "Validation Error") {
        super(message);
        this.name = "ValidationError";
        this.status = status;
    }
}

export class NotFoundError extends Error{
    constructor(status,message){
        super()
        this.name = "NotFoundError",
        this.status = status,
        this.message = message
    }
}
