import { type Params } from "nestjs-pino";

export const pinoHttpOptions: Params["pinoHttp"] = {
  base: null, // removes pid/hostname by default
  redact: {
    paths: [
      'req.headers["sec-websocket-extensions"]',
      'req.headers["sec-websocket-version"]',
      'res.headers["sec-websocket-key"]',
    ],
    remove: true,
  },
  transport:
    process.env.NODE_ENV !== "development"
      ? undefined
      : {
          targets: [
            {
              target: "pino-pretty",
              options: {
                colorize: true,
              },
            },
          ],
        },
};
