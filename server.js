/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import { listen } from './app';

// Porta utilizada
const port = 3000;

// Server
listen(port, () => {
  console.log(`Running in port:${port}`);
});
