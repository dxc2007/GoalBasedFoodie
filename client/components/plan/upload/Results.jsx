import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Col, ButtonGroup, Button, FormControl} from 'react-bootstrap';
import _ from 'lodash';

export default class UploadResults extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "Your plan",
            days: 7,
            meals: ["breakfast", "lunch", "dinner"],
            entries: [[{id: "1879hhsgfa",
                categories: "meat",
                name: "Johnston's",
                address: "blah",
                distance: 2351,
                checkin: 321
            }]],
        }
    }

    componentDidMount() {
        this.setState({ data: ""});
    }

    render() {
        const style = {
        }

        return (
                <Col smOffset={3} sm={6} mdOffset={3} md={6}>
                    <div>
                        <h2>{this.state.title}</h2>

                        { this.state.entries.map(venue =>
                                (<div key={venue.id}>

                                    <p>{venue.location.name}</p>
                                    <p>{venue.stats.checkinsCount}</p>
                                </div>)

                        )
                        }
                        <Button onClick={this.search.bind(this)} ref="getPlaces"> Search </Button>

                        <Button bsStyle="primary" onClick={this.generatePlan.bind(this)} ref="decrement"> I'm ready! </Button>
                    </div>
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