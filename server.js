require('dotenv').config();
require('./lib/utils/connect')();

const app = require('./lib/app');

const PORT = process.env.PORT || 7898;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
