import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {Col, Checkbox, ButtonGroup, Button, FormControl} from 'react-bootstrap';
import {setMeals} from '../../../actions/userActions';

@connect((store) => {
    return {
        meals: store.user.meals,
        days: store.user.days
    }
})

export default class PUType extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "Select Options",
            types: ["3", "1 week", "1 month"],
            codes: {
                "3": "3",
                "1 week": "7",
                "1 month": "30"
            },
            breakfast: false,
            lunch: false,
            dinner: false,
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
                    <FormControl type="number" min="0" ref="days" placeholder="0" />
                    </div>
                    <p>
                        <label><input type="checkbox" value="breakfast" ref="checkbox1" onClick={this.handleChange.bind(this)}/> This is the first checkbox </label><br/>
                        <Checkbox ref="breakfast" >
                        Breakfast
                        </Checkbox>
                    </p>
                    <p>
                        <Checkbox ref="lunch" >
                        Lunch
                        </Checkbox>
                    </p>
                    <p>
                        <Checkbox ref="dinner" >
                        Dinner
                        </Checkbox>
                    </p>
                    <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
                </div>
            </Col>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const meals = [this.refs.checkbox1.value];
        const days = ReactDOM.findDOMNode(this.refs.days).value;
        this.props.dispatch(setMeals(meals, days));
        browserHistory.push('/search');
    }

    handleChange(e) {
        const value = e.target.value;
        const setMeal = {};
        setMeal[value] = true;
        this.setState(setMeal, console.log(this.state.value));
    }

    setDate(e) {
        e.preventDefault();
        console.log(e.target.value);
        console.log(this.state.codes);
        const days = this.state.codes[e.target.value].slice(0);
        console.log(days);
        ReactDOM.findDOMNode(this.refs.days).value = parseInt(days);
    }

}
