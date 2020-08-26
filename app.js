const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send("PRC CI/CD Demo");
});

app.listen(3000, () => {
    console.log("Express working...");
});
