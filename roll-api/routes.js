const path = require('path');

module.exports = function routeHandler(app) {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../roll-web/dist/index.html'));
  });

  app.get('/test', (req, res) => {
    console.log('/test received');
    res.send('ok');
  });
}