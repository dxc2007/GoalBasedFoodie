import React from 'react';
import {connect} from 'react-redux';

import {browserHistory} from 'react-router';
import {Col, Grid, Row} from 'react-bootstrap';
import _ from 'lodash';

@connect((store) => {
    return{
        venues: store.user.venues,
        days: store.user.days,
        meals: store.user.meals,
    }
})


export default class UploadResults extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "Your plan",
            noMeals: 0,
            entries: [[{id: "1879hhsgfa",
                categories: "meat",
                name: "Johnston's",
                address: "blah",
                distance: 2351,
                checkin: 321
            }]],
        }
    }

    componentWillMount() {
        let noMeals = 0;
        for (const i in this.props.meals) {
            for (const j in this.props.days) {
                noMeals++
            }
        }
        this.setState({ noMeals: noMeals});
    }

    render() {
        const style = {
        }

        const Meals = this.props.meals;
        const Days = [];
        for (let i = 0; i < this.props.days; i++) {
            Days.push(i+1);
        }
        console.log(this.props.venues);
        return (
                <Col smOffset={3} sm={6} mdOffset={3} md={6}>
                    <Grid>
                    {
                    Days.map(day =>
                        (<Row key={day}>
                            Day: {day}
                            {Meals.map(meal =>
                                (<Col sm={5 / Meals} md={5 / Meals} key={meal+day.toString()}>
                                    <p>{meal}</p>
                                    {this.props.venues[Math.floor(Math.random() * this.props.venues.length)][0].name}
                                </Col>)
                            )}
                        </Row>)
                    )
                    }
                    </Grid>
                </Col>
        )
    }

    generatePlan(e) {
        e.preventDefault();
        browserHistory.push('/distance');
    }

    addEntry(ref) {
        console.log(ref);
        const venue = _(this.state.data.response.venues)
                .filter({ 'id' : ref })
                .map(venue => ({
                    id: venue.id + "1",
                    categories: venue.categories[0].shortName,
                    name: venue.name,
                    address: venue.location.formattedAddress,
                    distance: venue.location.distance,
                    checkin: venue.stats.checkinsCount
                }))
                .value();

        console.log(venue);
        let prevVenues = this.state.entries.slice(0);
        prevVenues.push(venue);
        console.log(prevVenues);
        this.setState({ entries: prevVenues
                },
                console.log("after: ", this.state.entries)
        );
    }

    search() {

    }

}