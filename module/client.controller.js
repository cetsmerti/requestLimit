const path = require("path");
const fs = require("fs");
class ClientController {
  async sendClient(req, res) {
    try {
      const data = fs.readFileSync(
        path.join(__dirname, "sample", "index.html")
      );
      res.header("Content-Type", "text/html").send(data);
    } catch (err) {
      res.code(500).send("Internal Server Error");
    }
  }
}

module.exports = new ClientController();
