const express = require('express');
const cors = require('cors');
const Parser = require('cookie-parser');
const { setRouters } = require('./server/router');
const { writeLog } = require('./server/log');

// urls & port
const expPort = 8888;

// init express
const app = express();

// set port
app.set('port', (process.env.PORT || expPort));

// static files
app.use(express.static(`${__dirname}/dist`, { maxAge: 0 }))
  .use(cors())
  .use(Parser());

// routers
setRouters(app);

// listen
app.listen(app.get('port'), () => {
  console.log(`Node app is running at localhost:${app.get('port')}`);
});

// write log
writeLog('server starts.', 'NOTICE');
