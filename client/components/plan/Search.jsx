import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {browserHistory} from 'react-router';
import {Col, Button, Form, FormControl, FormGroup} from 'react-bootstrap';
import _ from 'lodash';

import {setVenues} from '../../actions/userActions';
import {callSearchApi, callPopularApi, callMultipleApi} from '../../actions/fourSquareVenueSearchActions';
import Foursquare from '../Experimental Features/FoursquareAutoComplete.jsx';

@connect((store) => {
    return {
        data: store.search.data,
        err: store.search.err,
    };
})

export default class Type extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVenues: [],
            allVenues: [],
            noVenues: false,
            warnings: {
                noVenues: "Add at least one venue here",
            }
        }
    }

    componentWillMount() {
        const venue = {};
        this.setState({ allVenues: [venue]});
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.data);
        if (nextProps.data.length) {
            function mapVenues(venue) {
                let Venue = {};
                if (venue.id) {
                    Venue = {
                        id: venue.id,
                        name: venue.name,
                        address: venue.location.formattedAddress,
                        distance: venue.location.distance,
                        checkin: venue.stats.checkinsCount,
                        display: true,
                    };
                    if (venue.categories.length) {
                        Venue.categories = venue.categories[0].shortName;
                    }
                } else {
                    venue = venue['venue'];
                    Venue = {
                        id: venue.id,
                        name: venue.name,
                        address: venue.location.formattedAddress,
                        distance: venue.location.distance,
                        checkin: venue.stats.checkinsCount,
                        display: true,
                    };
                    if (venue.categories.length) {
                        Venue.categories = venue.categories[0].shortName;
                    }

                }
                return Venue
            }
            const venues = nextProps.data
                .map(mapVenues);
            this.setState({ allVenues: venues }, console.log("Updated venues"));
        } else {
            const venue = {
                id: 1234,
                categories: "",
                name: "nothing found",
                address: [""],
                distance: "",
                checkin: "",
                display: true,
            };
            this.setState({ allVenues: [venue] }, console.log("Nothing found"));
        }
    }

    render() {

        return (
            <Col>
                {this.state.noVenues? <Button bsSize="small" disabled>{this.state.warnings.noVenues}</Button> : null}
                {this.state.selectedVenues.map(entry => <Button bsSize="small" key={entry[0].id} disabled>{entry[0].name}</Button>)}
                <br />
                <Button onClick={this.generatePlan.bind(this)} ref="decrement"> I'm ready! </Button>
                <Col className="contentBox">
                <Form inline>
                    <FormGroup bsSize='lg'>
                        <Foursquare ref="placeQuery" addEntryAutocomplete={this.addEntryAutocomplete.bind(this)} />
                    </FormGroup></Form>
                    {'Show: '}
                    <Button bsStyle="danger" bsSize='small' onClick={this.callPopular.bind(this)}>Popular</Button>
                    {/*<Button bsStyle="success" bsSize='small' onClick={this.callMultiple.bind(this)}>Cheap</Button>*/}
                    <Col id="searchResults">
                    { _.filter(this.state.allVenues, { display: true})
                        .map(venue =>
                        (<div key={venue.id} className="searchResultUnit">
                            <Col md={6}>
                                <p>Name: {venue.name}</p>
                                <p>Distance: {venue.distance}m</p>
                                <p>Address: {venue.address.map(part => <span>{part+" "}</span>)}</p>
                                <p>Check In: {venue.checkin}</p>
                                <p>Categories: {venue.categories}</p>
                                <Button onClick={this.addEntry.bind(this, venue.id)}>Add</Button>
                            </Col>
                        </div>)
                    )}
                    </Col>
                </Col>
            </Col>
        )
    }

    generatePlan(e) {
        e.preventDefault();
        if (this.state.selectedVenues.length == 0) {
            this.setState({ noVenues: true });
            return "noVenues error";
        }
        this.props.dispatch(setVenues(this.state.selectedVenues));
        browserHistory.push('/plan/results');
    }

    addEntry(ref) {
        console.log(ref);
        console.log(this.state.allVenues);
        this.setState({ noVenues: false });
        const venue = _(this.state.allVenues)
            .filter({ 'id' : ref })
            .value();
        console.log(venue);

        //show selected venue on top screen
        let prevVenues = this.state.selectedVenues.slice(0);
        prevVenues.push(venue);
        this.setState({ selectedVenues: prevVenues
            },
            console.log("after: ", this.state.selectedVenues)
        );

        //hide selected venue at bottom
        console.log("All venues:", this.state.allVenues);
        console.log("venue to find:", venue[0]);
        const index = _.findIndex(this.state.allVenues, venue[0]);
        console.log(index);
        const tempAllVenues = this.state.allVenues.slice(0);
        tempAllVenues[index]["display"] = false;
        this.setState({ allVenues: tempAllVenues},
            console.log(tempAllVenues)
        );
    }

    addEntryAutocomplete(venue) {
        console.log(venue);
        this.setState({ noVenues: false });
        let prevVenues = this.state.selectedVenues.slice(0);
        prevVenues.push(venue);
        this.setState({ selectedVenues: prevVenues
            },
            console.log("after: ", this.state.selectedVenues)
        );
    }

    search() {
        const query = ReactDOM.findDOMNode(this.refs.placeQuery).value;
        this.props.dispatch(callSearchApi(query));
    }

    callPopular() {
        this.props.dispatch(callPopularApi());
    }

    callMultiple() {
        this.props.dispatch(callMultipleApi());
    }

}