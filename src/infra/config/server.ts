import { fastifyServer } from "../adapters/fastify/fastify-server";

async function main() {
  await fastifyServer();
}

main();
