import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Checkbox, ButtonGroup, Button, FormControl} from 'react-bootstrap';

export default class Type extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "Select Options",
            types: ["3", "1 week", "1 month"],
            codes: {
                "3": "3",
                "1 week": "7",
                "1 month": "30"
            }
        }
    }

    render() {
        return (
            <Col smOffset={3} sm={6} mdOffset={3} md={6}>
                <h2>{this.state.title}</h2>
                <div>
                    <div>
                    Days:
                    <ButtonGroup bsSize="large" onClick={this.setDate.bind(this)}>
                        {this.state.types.map(type => <Button key={type} value={type}>{type}</Button>)}
                    </ButtonGroup>
                    {/*<Button onClick={this.increment.bind(this)}>*/}
                    {/*-*/}
                    {/*</Button>*/}
                    <FormControl type="number" min="0" ref="days" placeholder="0" />
                    {/*<Button onClick={this.decrement.bind(this)}>*/}
                    {/*+*/}
                    {/*</Button>*/}
                    </div>
                    <p>   <Checkbox readOnly>
                        Breakfast
                    </Checkbox></p>
                    <p>   <Checkbox readOnly>
                        Lunch
                    </Checkbox></p>
                    <p>   <Checkbox readOnly>
                        Dinner
                    </Checkbox></p>
                    <Button onClick={this.handleSubmit.bind(this)}></Button>
                </div>
            </Col>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.value);
        const cat = this.state.codes[e.target.value].slice(0);
        console.log(cat);
        this.props.setPriceFilter.bind(this, cat);
        browserHistory.push('/search');
    }

    setDate(e) {
        e.preventDefault();
        console.log(e.target.value);
        console.log(this.state.codes);
        const days = this.state.codes[e.target.value].slice(0);
        console.log(days);
        ReactDOM.findDOMNode(this.refs.days).value = parseInt(days);
    }

/*
    decrement() {
        let currentDays = parseInt(ReactDOM.findDOMNode(this.refs.days).value);
        console.log("before: ", currentDays);
        if  (currentDays <= 0) {
            currentDays = 0;
        } else {
            currentDays -= 1;
        }
        console.log("after: ", currentDays);
    }

    increment() {
        let currentDays = parseInt(ReactDOM.findDOMNode(this.refs.days).value);
        console.log("before: ", currentDays);
        currentDays += 1;
        console.log("after: ", currentDays);
    }
*/

}
