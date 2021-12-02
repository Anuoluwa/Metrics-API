const http = require('http');
const app = require('./src/api/server');
const winston = require('./src/config/winston');

const port = process.env.PORT || 4000;

const httpServer = http.createServer(app);

httpServer.listen(port, (err) => {
  if (err) return winston.info(err.message);
  return winston.info(`Application started on http://localhost:${port}`);
});

