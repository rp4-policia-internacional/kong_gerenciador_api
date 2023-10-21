const http = require('http');
const process = require('process');

function handler(req, res) {
  res.end(process.env.CONTENT);
}

const server = http.createServer(handler);
const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
