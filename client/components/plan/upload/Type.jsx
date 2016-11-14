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
                        <label><input type="checkbox" value="breakfast" ref="breakfast" onClick={this.handleChange.bind(this)}/> Breakfast </label><br/>
                        <label><input type="checkbox" value="lunch" ref="lunch" onClick={this.handleChange.bind(this)}/> Lunch </label><br/>
                        <label><input type="checkbox" value="dinner" ref="dinner" onClick={this.handleChange.bind(this)}/> Dinner </label><br/>
                    <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
                </div>
            </Col>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const days = ReactDOM.findDOMNode(this.refs.days).value;
        const meals = [];
        for (const meal in this.state.setMeals) {
            if (this.state.setMeals[meal]) {
                console.log("Meal has been added", meal);
                meals.push(meal);
            }
        }
        this.props.dispatch(setMeals(meals, days));
        browserHistory.push('/upload/search');
    }

    handleChange(e) {
        const value = e.target.value;
        console.log(value);
        const checked = ReactDOM.findDOMNode(this.refs[value]).checked;
        const meals = Object.assign({}, this.state.setMeals);
        meals[value] = checked;
        this.setState({setMeals: meals})
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
