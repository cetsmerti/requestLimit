const requestTimestamps = new Map();
function limit(req, res, next) {
  const now = Date.now();
  const recentRequests = Array.from(requestTimestamps.values()).filter(
    (timestamp) => now - timestamp < 1000
  );
  const maxRequests = 50;
  if (recentRequests.length >= maxRequests) {
    return res.status(429).send("Too Many Requests");
  }
  requestTimestamps.set(now, now);
  next();
}

module.exports = limit;
