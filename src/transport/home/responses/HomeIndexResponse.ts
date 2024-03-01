import BaseResponse from "../../common/BaseResponse";
import {ResponseStatus} from "../../common/ResponseStatus";

export default class HomeIndexResponse extends BaseResponse {
    constructor(public status: ResponseStatus) {
        super(status);
    }
}
