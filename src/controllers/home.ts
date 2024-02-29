import { Request, Response } from "express";

/**
 * Home path.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
    res.json({ status: "ok" });
};