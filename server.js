const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.set('port', process.env.PORT || 8080 || 3000);