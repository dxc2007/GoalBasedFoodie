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
                <Col smOffset={3} sm={6} mdOffset={4} md={4}>
                   <Link to="/quickfix"><Button onClick={this.geolocate.bind(this)}>Quick Fix</Button></Link>
                    <Link to="/plan"><Button onClick={this.geolocate.bind(this)}>Submit</Button></Link>
                </Col>
        )

    }

}
