import React from 'react';
import { connect } from 'react-redux';

import {browserHistory} from 'react-router';
import {Col, ButtonGroup, Button} from 'react-bootstrap';

import {setPriceFilter} from '../../actions/fourSquareVenueSearchActions'

@connect((store) => {
    return {
        price: store.search.priceFilter,
    };
})

export default class Price extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "Price",
            types: ["$", "$$", "$$$", "doesn't matter"],
            codes: {
                "$": "1",
                "$$": "2",
                "$$$": "3",
                "doesn't matter": "4"
            }
        }
    }

    render() {
        return (
            <Col smOffset={3} sm={6} mdOffset={3} md={6}>
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
        this.props.dispatch(setPriceFilter(cat));
        browserHistory.push('/distance');
    }
}
