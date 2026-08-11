const http = require('http');
const https = require('https');

const PORT = 3000;
const TARGET_HOST = 'presales.businessbywire.com';

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

  // Rewrite path to target restapigb8 path
  const targetPath = '/restapigb8' + req.url;
  console.log(`[Proxy] Routing ${req.method} ${req.url} -> https://${TARGET_HOST}${targetPath}`);

  // Read request body to forward
  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    const options = {
      hostname: TARGET_HOST,
      port: 4443, // Wait, is the target port 4443 or standard 443? Let's check the screenshot.
      // In the screenshot: Remote Address: 34.160.204.25:443 (Standard HTTPS port is 443!)
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
});

server.listen(PORT, () => {
  console.log(`[Local Proxy] Server running at http://localhost:${PORT}`);
  console.log(`[Local Proxy] Forwarding requests to https://${TARGET_HOST}/restapigb8`);
  console.log(`[Local Proxy] To test, run the onboarding page in Chrome and hit submit!`);
});
