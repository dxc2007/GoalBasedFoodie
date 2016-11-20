import React from 'react';
import {Link} from 'react-router';
import {Col, Button} from 'react-bootstrap';

export default class Choice extends React.Component {

    render() {
        return (
                <Col className="choice">
                   <Link to="/quickfix"><Button bsSize="lg">Quick Fix</Button></Link>
                    {' '}
                    <Link to="/plan"><Button bsSize="lg">I need a Plan</Button></Link>
                </Col>
        )
    }

}
