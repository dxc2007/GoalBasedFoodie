import React from 'react';
import {connect} from 'react-redux';

import {browserHistory} from 'react-router';
import {Col, ButtonGroup, Button, ButtonToolbar} from 'react-bootstrap';

import {setCategories} from '../../actions/fourSquareVenueSearchActions';

@connect((store) => {
    return {
        categories: store.search.categories,
    };
})

export default class Type extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Type",
            types: ["Western", "Japanese", "Chinese", "Food Court", "Café", "Buffet"],
            codes: {
                "Food Court": "4bf58dd8d48988d120951735",
                "Chinese": "4bf58dd8d48988d145941735",
                "Japanese": "4bf58dd8d48988d111941735",
                "Western": "4bf58dd8d48988d14e941735,4bf58dd8d48988d10c941735,52e81612bcbc57f1066b7a05",
                "Café": "4bf58dd8d48988d16d941735",
                "Buffet": "52e81612bcbc57f1066b79f4"
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
        this.props.dispatch(setCategories(cat));
        browserHistory.push('/quickfix/price');
    }

}
