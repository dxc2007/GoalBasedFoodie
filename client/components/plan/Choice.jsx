import React from 'react';
import {Link} from 'react-router';
import {Col, Button} from 'react-bootstrap';

export default class Choice extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            geolocation: {},
            autocomplete: {}
        }
    }

    render() {
        return (
            <Col smOffset={3} sm={6} mdOffset={3} md={6}>
                <Link to="/quickfix"><Button>I have my own places</Button></Link>
                <Link to="/plan"><Button>Decide for me</Button></Link>
            </Col>
        )

    }

}
