import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {Col, Table, Button} from 'react-bootstrap';

export default class ExportToGoogleCal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            CLIENT_ID: '715862145264-4t6m23f5hq0hctg81kmdo2i8fhfv8k1l.apps.googleusercontent.com',
            SCOPES: ["https://www.googleapis.com/auth/calendar"],
            clientId: "5J3x2qBTH0_rwLsxhDKN515iJtHGB2J6",
            clientSecret: "VJL5KQXLTl3nj4xYrx-64GElWp5ZO_45VQl003Nu6ToemQo_CUEy0bQJGIMJUI-SaD1raq1BAJ1eeEFb0B9PpQ",
            title: "TBD"
        };
    }

    componentDidMount() {

    }

    render () {
        return <Button id="authorize-button" onClick={this.reqAuth.bind(this)}>
            {this.state.title}
        </Button>
    }

    reqAuth() {
        const params = {
            response_type: "code",
            client_id: this.state.clientId,
            redirect_uri: "http://localhost:8080",
            scope: "create_event",
            state: "yepthatsgood",
        };
        axios.get('https://app.cronofy.com/oauth/authorize', params)
            .then((response) => {
            this.reqAccessToken.bind(this, response.code)
            })
            .catch((err) => {
                console.error(err);
            })

    }

    reqAccessToken(code) {
        const body = {
            client_id: this.state.clientId,
            client_secret: this.state.clientSecret,
            grant_type: "authorization_code",
            code: code,
            redirect_uri: "http://localhost:8080",
        };
        const config = {
            headers: {
                "Content-Type": 'application/json; charset=utf-8',
                Host: "api.cronofy.com",
            },
        }
        axios.post('https://app.cronofy.com/oauth/', body, config)
            .then((response) => {
                this.setState({accessToken: response.access_token}, console.log(response.access_token));
            })
            .catch((err) => {
                console.error(err);
            })
    }

    /**
     * Check if current user has authorized this application.
     */
    handleAuthClick(event) {
        gapi.auth.authorize(
            {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
            handleAuthResult);
        return false;
    }

    /**
     * Handle response from authorization server.
     *
     * @param {Object} authResult Authorization result.
     */
    handleAuthResult(authResult) {
        // var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
            console.log("Success!");
            // Hide auth UI, then load client library.
            // authorizeDiv.style.display = 'none';
            this.createEvent.bind(this);
        } else {
            console.error(authResult.error);
            // Show auth UI, allowing the user to initiate authorization by
            // clicking authorize button.
            // authorizeDiv.style.display = 'inline';
        }
    }

    createEvent() {
        const event = {
            'summary': 'Lunch @ This new place I found on the webpage',
            'location': 'Foursquare Provided Location',
            'description': 'Day X of Y',
            'start': {
                'dateTime': '2015-05-28T09:00:00-07:00',
            },
            'end': {
                'dateTime': '2015-05-28T17:00:00-07:00',
            },

            'reminders': {
                'useDefault': true,
            }
        };

        const request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
        });


        request.execute(function(event) {
            appendPre('Event created: ' + event.htmlLink);
        });
    }


}

