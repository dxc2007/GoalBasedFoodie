import React from 'react';
import Footer from './Footer.jsx';

import {Col} from 'react-bootstrap';

export default class AppHomepage extends React.Component {

    render() {

        return (
            <Col>
                <Col id="appHomepage">
                    {this.props.children}
                </Col>
                <Footer/>
            </Col>
        )

    }

}
