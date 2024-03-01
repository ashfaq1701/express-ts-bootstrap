import express from "express";
import bodyParser from "body-parser";

// Controllers (route handlers)
import homeController from "./transport/services/home/controller";

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.get("/", homeController.index);

export default app;
