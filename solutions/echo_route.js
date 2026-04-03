const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/echo') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          res.end(JSON.stringify(data));
        } catch {
          res.end(JSON.stringify({}));
        }
      });
    } else if (req.method === 'GET') {
      // Для GET повертаємо пустий JSON
      res.end(JSON.stringify({}));
    } else {
      // Інші методи
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method Not Allowed');
    }

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = process.argv[2] || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));