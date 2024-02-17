class RequestController {
  async randomDelay(req, res) {
    const delay = Math.floor(Math.random() * 1000) + 1;
    const index = req.params.index || 0;
    await new Promise((resolve) => {
      const timestamp = setTimeout(() => {
        return res.send(`Index: ${index}`);
      }, delay);
      return timestamp;
    }).then((timestamp) => {
      clearTimeout(timestamp);
    });
  }
}

module.exports = new RequestController();
