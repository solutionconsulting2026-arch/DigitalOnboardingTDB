const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const TARGET_HOST = 'presales.businessbywire.com';
const STATIC_DIR = __dirname;

const server = http.createServer((req, res) => {
  // Set CORS headers for browser preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const urlPath = req.url.split('?')[0];

  // If request is for CRM endpoints, proxy them
  if (urlPath === '/oauth2/token' || urlPath === '/crmWebApi/saveObject') {
    const targetPath = '/restapigb8' + req.url;
    console.log(`[Proxy API] Routing ${req.method} ${req.url} -> https://${TARGET_HOST}${targetPath}`);

    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      const options = {
        hostname: TARGET_HOST,
        port: 443,
        path: targetPath,
        method: req.method,
        headers: {
          'Content-Type': req.headers['content-type'] || 'application/json',
        }
      };

      if (req.headers['authorization']) {
        options.headers['Authorization'] = req.headers['authorization'];
      }

      const proxyReq = https.request(options, (proxyRes) => {
        res.writeHead(proxyRes.statusCode, {
          'Content-Type': proxyRes.headers['content-type'] || 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        proxyRes.pipe(res);
      });

      proxyReq.on('error', (err) => {
        console.error('[Proxy Error]:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Proxy failed to connect to target' }));
      });

      proxyReq.write(body);
      proxyReq.end();
    });
  } else {
    // Serve static files from current directory
    let filePath = path.join(STATIC_DIR, urlPath === '/' ? 'index.html' : urlPath);
    
    // Safety check to prevent directory traversal outside STATIC_DIR
    if (!filePath.startsWith(STATIC_DIR)) {
      res.writeHead(403);
      res.end('403 Forbidden');
      return;
    }

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404);
        res.end('404 Not Found');
        return;
      }

      // Determine content type
      const ext = path.extname(filePath).toLowerCase();
      let contentType = 'text/plain';
      if (ext === '.html') contentType = 'text/html; charset=utf-8';
      else if (ext === '.css') contentType = 'text/css';
      else if (ext === '.js') contentType = 'application/javascript';
      else if (ext === '.png') contentType = 'image/png';
      else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
      else if (ext === '.svg') contentType = 'image/svg+xml';
      else if (ext === '.json') contentType = 'application/json';

      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    });
  }
});

server.listen(PORT, () => {
  console.log(`[Local Dev Server & Proxy] Server running at http://localhost:${PORT}`);
  console.log(`[Local Dev Server & Proxy] Proxies /oauth2/token and /crmWebApi/saveObject to https://${TARGET_HOST}/restapigb8`);
  console.log(`[Local Dev Server & Proxy] Open http://localhost:${PORT} in your browser to run the application.`);
});
