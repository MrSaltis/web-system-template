const express = require('express');

const app = express();
app.use(express.static('./frontend'));
app.listen(3333);
console.log("Server running");
