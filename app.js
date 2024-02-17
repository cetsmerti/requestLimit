const fastify = require("fastify");
const limit = require("./middleware/limit.middeleware");
const RequestController = require("./module/request.controller");
const clientController = require("./module/client.controller");
class App {
  constructor() {
    this.port = 3000;
    this.app = fastify({ logger: true });
  }

  async routesInit() {
    this.app.post(
      "/api",
      { preHandler: [limit] },
      RequestController.randomDelay
    );
    this.app.get("/", clientController.sendClient);
  }

  async init() {
    try {
      await this.routesInit();
      this.server = this.app.listen({ port: this.port });
      this.app.log.info(`Server listening on port ${this.port}`);
    } catch (error) {
      this.app.log.error(error);
    }
  }
}

module.exports = App;
