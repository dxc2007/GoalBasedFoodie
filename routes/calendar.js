const express = require('express');
const routes = express.Router();
const axios = require('axios');

const CLIENT_ID = "5J3x2qBTH0_rwLsxhDKN515iJtHGB2J6";
const CLIENT_SECRET = "VJL5KQXLTl3nj4xYrx-64GElWp5ZO_45VQl003Nu6ToemQo_CUEy0bQJGIMJUI-SaD1raq1BAJ1eeEFb0B9PpQ";

routes.get('/getaccess', function(req, res) {
    const host = req.get('host');
    const body = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "authorization_code",
        code: req.query.code,
        redirect_uri: "http://" + host + "/calendar/getaccess",
    };
    console.log(body.redirect_uri);
    const config = {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Host": "api.cronofy.com",
        },
    }
    axios.post('https://api.cronofy.com/oauth/token', body, config)
        .then((response) => {
            console.log(response);
            res.redirect("http://" + host + "/calendar/getaccess?token=" + response.data.access_token);
        })
        .catch((error) => {
            console.error(error)
        })
});

module.exports = routes;