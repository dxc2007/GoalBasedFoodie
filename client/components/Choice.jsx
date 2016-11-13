import React from 'react';
import {Link} from 'react-router';
import {Col, Button} from 'react-bootstrap';

export default class Choice extends React.Component {

    render() {
        return (
                <Col smOffset={3} sm={6} mdOffset={3} md={6}>
                   <Link to="/quickfix"><Button>Quick Fix</Button></Link>
                    <Link to="/plan"><Button>I need a Plan</Button></Link>
                </Col>
        )
    }

}
