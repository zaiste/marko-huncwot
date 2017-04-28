require('marko/node-require');

const Huncwot = require('huncwot');

const app = new Huncwot();
const template = require('./index.marko');

app.get('/', request => template.stream({ name: 'Frank' }))

app.listen(3000);
