import express, { Request, Response, NextFunction } from "express";
// import cookieParser from "cookie-parser"
import http from "http";
import cors from "cors";
import logging from "./config/logging";
import config from "./config/config";
import AppRouter from "./routes";

const NAMESPACE = "server";

const openServer = async () => {
  try {
    const router = express();
    router.use((req: Request, res: Response, next: NextFunction) => {
      logging.info(
        NAMESPACE,
        `METHOD-[${req.method}], URL-[${req.url}], IP-[${req.socket.remoteAddress}]`
      );
      res.on("finish", () => {
        logging.info(
          NAMESPACE,
          `METHOD-[${req.method}], URL-[${req.url}], IP-[${req.socket.remoteAddress}], STATUS-[${res.statusCode}]`
        );
      });
      next();
    });
    router.use(express.json());
    router.use(cors());
    router.use("/", AppRouter);

    const httpServer = http.createServer(router);
    httpServer.listen(config.server.port, () => {
      logging.info(
        NAMESPACE,
        `server is running on ${config.server.hostname}:${config.server.port}`
      );
    });
  } catch (err) {
    const error = err as Error;
    logging.error(NAMESPACE, error.message);
  }
};

openServer();
