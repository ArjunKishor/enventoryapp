import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandlerService implements ErrorHandler {
    constructor() { }
    handleError(error: any) : void {
        console.log(error);
    }
}