/* eslint-disable linebreak-style */
/* eslint-disable no-console */

const app = require('./app');

// Porta utilizada
const port = 3000;

// Server
app.listen(port, () => {
  console.log(`Running in port:${port}`);
});
