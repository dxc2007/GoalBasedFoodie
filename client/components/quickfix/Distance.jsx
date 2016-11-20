import React from 'react';
import {connect} from 'react-redux';

import {browserHistory} from 'react-router';
import {Col, ButtonGroup, Button} from 'react-bootstrap';

import {setDistance} from '../../actions/fourSquareVenueSearchActions';

@connect((store) => {
    return {
        distance: store.search.distance,
    };
})

export default class Distance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Distance",
            types: ["<500m", "<5k", "<25k", "More"],
            codes: {
                "<500m": "500",
                "<5k": "5000",
                "<25k": "25000",
                "More": "90000"
            }
        }
    }

    render() {
        return (
            <Col class="quickfixOptions">
                <h2>{this.state.title}</h2>
                <ButtonGroup ref="type" bsSize="large" onClick={this.handleSubmit.bind(this)}>
                    {this.state.types.map(type => <Button key={type} value={type}>{type}</Button>)}
                </ButtonGroup>
            </Col>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.value);
        const cat = this.state.codes[e.target.value].slice(0);
        console.log(cat);
        this.props.dispatch(setDistance(cat));
        browserHistory.push('/quickfix/results')
    }

}
