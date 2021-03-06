import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {Col, ButtonGroup, Button, FormGroup, FormControl, Form} from 'react-bootstrap';
import {setMeals} from '../../actions/userActions';

@connect((store) => {
    return {
        meals: store.user.meals,
        days: store.user.days
    }
})

export default class PUType extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "How many days?",
            types: ["3 days", "1 week", "1 month"],
            codes: {
                "3 days": "3",
                "1 week": "7",
                "1 month": "30"
            },
            warnings: {
                invalidDays: "I need a number > 1",
                invalidMeals: "I need at least 1 meal"
            },
            setMeals: {},
            arbValue: 2
        }
    }

    render() {
        return (
            <Col>
                <h3>{this.state.title}</h3>
                <div>
                    <ButtonGroup bsSize="Small" onClick={this.setDate.bind(this)}>
                        {this.state.types.map(type => <Button key={type} value={type}>{type}</Button>)}
                    </ButtonGroup>
                    <Form inline>
                        <FormGroup bsSize="large"> 
                            <FormControl id="numDays" type="number" min="0" ref="days" placeholder="0" />
                        </FormGroup>
                    </Form>
                    <label><input type="checkbox" value="breakfast" ref="breakfast" onClick={this.handleChange.bind(this)}/> Breakfast </label>
                    {' '}
                    <label><input type="checkbox" value="lunch" ref="lunch" onClick={this.handleChange.bind(this)}/> Lunch </label>
                    {' '}
                    <label><input type="checkbox" value="dinner" ref="dinner" onClick={this.handleChange.bind(this)}/> Dinner </label><br/>
                    <Button bsStyle="primary" bsSize='lg' onClick={this.handleSubmit.bind(this)}>Submit</Button>
                </div>
            </Col>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        let daysRef = ReactDOM.findDOMNode(this.refs.days);
        const days = daysRef.value;
        if (days < 1) {
            daysRef.value = "";
            daysRef.placeholder = this.state.warnings.invalidDays;
            return "input days error";
        }
        const meals = [];
        for (const meal in this.state.setMeals) {
            if (this.state.setMeals[meal]) {
                console.log("Meal has been added", meal);
                meals.push(meal);
            }
        }
        console.log("meals length", meals);
        console.log("setMeals", this.state.setMeals);
        console.log(meals.length);
        if (meals.length < 1) {
            daysRef.value = "";
            daysRef.placeholder = this.state.warnings.invalidMeals;
            return "input meals error";
        }
        this.props.dispatch(setMeals(meals, days));
        browserHistory.push('/plan/search');
    }

    handleChange(e) {
        const value = e.target.value;
        let setMeals = this.state.setMeals;
        console.log(value);
        const checked = ReactDOM.findDOMNode(this.refs[value]).checked;
        console.log(Object.keys(setMeals).length);
        let meals = {};
        if (Object.keys(this.state.setMeals).length == 0) {
            const mealObjectInit = {
                breakfast: false,
                lunch: false,
                dinner: false
            };
            meals = Object.assign({}, mealObjectInit);
        } else {
            meals = Object.assign({}, setMeals);
        }
        meals[value] = checked;
        this.setState({setMeals: meals}, console.log(setMeals));
    }

    setDate(e) {
        e.preventDefault();
        console.log(e.target.value);
        console.log(this.state.codes);
        const days = this.state.codes[e.target.value].slice(0);
        console.log(days);
        ReactDOM.findDOMNode(this.refs.days).value = this.state.arbValue;
        console.log("date field set to space");
        ReactDOM.findDOMNode(this.refs.days).value = parseInt(days);
    }

}
