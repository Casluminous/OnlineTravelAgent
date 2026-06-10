import { Router } from "express";
import { clientRouter } from "./client.routes.js";
import { adminRouter } from "./admin.routes.js";
import { authRouter } from "./auth.routes.js";
import { adminAuth } from "../middlewares/auth.js";

export const routes = Router();

routes.use("/", clientRouter);
routes.use("/admin", adminAuth, adminRouter);
routes.use("/auth", authRouter);
