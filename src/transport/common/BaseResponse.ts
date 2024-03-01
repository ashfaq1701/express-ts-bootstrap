import {ResponseStatus} from "./ResponseStatus";

export default abstract class BaseResponse {
    protected constructor(public status: ResponseStatus) {}
}
