import React from 'react';
import {browserHistory} from 'react-router';
import {Col, ButtonGroup, Button} from 'react-bootstrap';

export default class DecideType extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Type",
            types: ["Popular", "Cheap", "Try a variety", "Just Eat"],
            codes: {
                "Popular": "",
                "Cheap": "",
                "Try a variety": "",
                "Just Eat": ""
            }
        }
    }

    render() {
        return (
            <Col smOffset={3} sm={6} mdOffset={3} md={6}>
                <h2>{this.state.title}</h2>
                <ButtonGroup ref="type" bsSize="large" onClick={this.handleSubmit.bind(this)}>
                    {this.state.types.map(type => <Button key={type} calue={type}>{type}</Button>)}
                </ButtonGroup>
            </Col>
        )

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.value);
        const cat = this.state.codes[e.target.value].slice(0);
        console.log(cat);
        this.props.setCategories.bind(this, cat);
        browserHistory.push('/price');
    }

}
