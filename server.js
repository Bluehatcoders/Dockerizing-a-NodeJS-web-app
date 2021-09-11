'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const ProtonMail = require('protonmail-api');

(async () => {
  const pm = await ProtonMail.connect({
    username: 'undefined127001@protonmail.com',
    password: 'satyanchalundefined'
  })

  await pm.sendEmail({
    to: 'quickhalewebtech@gmail.com',
    subject: 'Send email tutorial',
    body: 'Hello world'
  })

  pm.close()
})()
// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
