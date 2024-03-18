import { FastifyReply, FastifyRequest } from "fastify";
import { CreateSubscriptionFactory } from "../factories/create-subscription-factory";

type ExpressRequest = {
  body: any;
};

type ExpressReply = {
  status: (status: number) => void;
  send: (output: string) => void;
};

export class CreateSubscriptionController {
  static async execute(req: FastifyRequest, reply: FastifyReply) {
    const factory = new CreateSubscriptionFactory();
    const data = await factory.execute(req.body as any);
    return reply.status(201).send(data);
  }
}
