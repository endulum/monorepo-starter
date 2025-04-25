import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../server/app";

const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: "/api/trpc" })],
});

console.log(await trpcClient.greeting.query({ name: "endulum" }));

export default trpcClient;
