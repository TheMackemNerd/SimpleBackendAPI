'use strict';
var cors = require('cors');
var port = 80;
var express = require('express');
const app = express();

app.listen(port, () => { console.log('We are live on ' + port); });

app.use(cors());

app.get('/api/v1/widgets', function (req, res, next) {
    res.status(200).json([{ id: 1, name: 'foo', type: 'Standard' }, { id: 2, name: 'bar', type: 'Standard' }]);
});

app.post('/api/v1/widgets', function (req, res, next) {
    res.status(200).send();
});

app.delete('/api/v1/widgets', function (req, res, next) {
    res.status(200).send();
});

app.get('/api/v1/widgets/1', function (req, res, next) {
    res.status(200).json({ id: 1, name: 'foo', type: 'Standard' });
});

app.put('/api/v1/widgets/1', function (req, res, next) {
    res.status(200).send();
});

app.delete('/api/v1/widgets/1', function (req, res, next) {
    res.status(200).send();
});