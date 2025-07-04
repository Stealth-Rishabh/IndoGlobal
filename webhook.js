const crypto = require('crypto');
const http = require('http');
const { exec } = require('child_process');

const SECRET = 'evttr51bth54bhert6hb2bhbert5'; // Set your GitHub webhook secret
const PORT = 9001;

function verifySignature(req, body) {
  const signature = req.headers['x-hub-signature-256'];

  if (!signature) {
    console.error('❌ No signature found on request');
    return false;
  }

  const hmac = crypto.createHmac('sha256', SECRET);
  const digest = 'sha256=' + hmac.update(body).digest('hex');

  if (signature !== digest) {
    console.error(`❌ Invalid signature:
      Expected: ${digest}
      Received: ${signature}`);
    return false;
  }

  return true;
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = [];

    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      body = Buffer.concat(body).toString();

      if (!verifySignature(req, body)) {
        res.writeHead(401);
        return res.end('Invalid signature');
      }

      console.log('✅ Valid webhook received for IndoGlobal');

      exec('sh /var/www/running_sites/igef.net/IndoGlobal/deploy_frontend.sh', (error, stdout, stderr) => {
        if (error) {
          console.error(`Exec error: ${error}`);
          res.writeHead(500);
          return res.end('Deploy failed');
        }

        console.log(`STDOUT: ${stdout}`);
        console.error(`STDERR: ${stderr}`);

        res.writeHead(200);
        res.end('Deploy successful');
      });
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`✅ IndoGlobal Webhook listener running on port ${PORT}`);
});
