import { Router, Request, Response } from "express";

const AppRouter = Router();
AppRouter.get("/", async (req: Request, res: Response) => {
  return res.send({ success: true });
});

export default AppRouter;
