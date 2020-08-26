const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send("PRC CI/CD Demo");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Express working...");
});

