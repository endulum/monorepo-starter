import { initTRPC } from "@trpc/server";
import { z } from "zod";

import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";

const t = initTRPC.create();

const publicProcedure = t.procedure;
const router = t.router;

const appRouter = router({
  greeting: publicProcedure
    .input(
      z
        .object({
          name: z.string().nullish(),
        })
        .nullish()
    )
    .query(({ input }) => {
      return {
        text: `hello ${input?.name ?? "world"}`,
      };
    }),
});

export type AppRouter = typeof appRouter;

const app = express();

app.get("/", (_req, res) => {
  res.json([
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 35 },
  ]);
});

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

const PORT = 3000;
app.listen(PORT, () => {
  console.warn(`⚡️ server starting at http://localhost:${PORT}`);
});
