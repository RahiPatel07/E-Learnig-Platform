import https from 'https';
import fs from 'fs';

// Read your certificate and key
const options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt'),
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello, HTTPS!');
}).listen(443, () => {
  console.log('Server running on https://localhost');
});
