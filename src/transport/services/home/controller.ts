import {NextFunction, Request, Response} from "express";
import HomeIndexResponse from "./responses/HomeIndexResponse";
import HomeIndexDTO from "./dtos/HomeIndexDTO";
import {validationMiddleware} from "../../middlewares/validation.middleware";
import {ResponseStatus} from "../../common/ResponseStatus";

/**
 * Home path.
 * @route GET /
 */
const indexAction = (req: Request, res: Response, next: NextFunction) => {
    res.json(new HomeIndexResponse(ResponseStatus.OK));
    next();
};

export default {
    index: [validationMiddleware(HomeIndexDTO), indexAction]
};
