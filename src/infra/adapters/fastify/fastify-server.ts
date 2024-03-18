import { CreateSubscriptionController } from "@/src/application/controllers/create-subscription-controller";
import fastify from "fastify";

export const fastifyApp = fastify();

export async function fastifyServer() {
  fastifyApp.post("/subscriptions", CreateSubscriptionController.execute);

  fastifyApp.listen({ host: "127.0.0.1", port: 3000 });
}
