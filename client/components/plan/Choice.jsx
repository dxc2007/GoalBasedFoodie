import React from 'react';
import {Link} from 'react-router';
import {Col, Button} from 'react-bootstrap';

export default class PChoice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            geolocation: {},
            autocomplete: {}
        }
    }

    render() {
        return (
            <Col className="choice">
                <Link to="/upload"><Button bsSize="large">I have my own places</Button></Link>
                {' '}
                <Link to="/decide"><Button bsSize="large">Decide for me</Button></Link>
            </Col>
        )
    }

}
