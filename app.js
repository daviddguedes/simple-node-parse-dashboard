const express = require('express');
const ParseDashboard = require('parse-dashboard');

const app = express();

const dashboard = new ParseDashboard({
    "apps": [
        {
            "serverURL": "http://localhost:1337/blog",
            "appId": "myAppId",
            "masterKey": "pppppp",
            "appName": "Blog"
        }
    ]
});

app.use('/', dashboard);

app.listen(1338, () => {
    console.log('Dashboard is running on http://localhost:1338');
});