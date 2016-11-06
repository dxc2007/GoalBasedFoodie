import React from 'react';
import {browserHistory} from 'react-router';
import {Col, ButtonGroup, Button} from 'react-bootstrap';

export default class Type extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "Distance",
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
        this.props.setPriceFilter.bind(this, cat);
        browserHistory.push('/distance');
    }
}
