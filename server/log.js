const { Logging } = require('@google-cloud/logging');

exports.writeLog = (
  text, severity = 'DEFAULT',
) => {
  // config
  const projectId = 'GCP_PROJECT_ID'; // [GCP_INIT] Replace with real GCP project id.
  const logName = 'server-log';
  const keyFilename = './gcp/sa-key.json';
  // initialize
  const logging = new Logging({ projectId, keyFilename });
  const log = logging.log(logName);
  // log data
  const entry = log.entry({
    resource: { type: 'global' },
    severity,
  }, (text || 'no log content.'));
  // write log
  (async () => {
    await log.write(entry);
    console.log(`[${severity}] Logged: ${text} `);
  })();
};
