import {ClassConstructor, plainToInstance} from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import DTO from "../common/DTO";

export function validationMiddleware<T extends DTO>(dtoClass: ClassConstructor<T>) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dto = plainToInstance(dtoClass, req.body);
            const errors = await validate(dto);

            if (errors.length > 0) {
                return res.status(400).json({ errors });
            }

            // Attach validated DTO object to request for later use
            req.body = dto;
            next();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    };
}
