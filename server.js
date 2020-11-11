const express = require('express');

const app = express();

app.use(express.static('./dist/shop'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/shop' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)
