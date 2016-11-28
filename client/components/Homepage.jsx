import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux"

import {browserHistory} from 'react-router';
import {Form, FormGroup,  Col, Button,  FormControl, Glyphicon} from 'react-bootstrap';

import Export from "./Experimental Features/ExportToGoogleCal.jsx";

import {setCoords} from '../actions/fourSquareVenueSearchActions'

@connect((store) => {
    return {
        search: store.search.coords,
    };
})

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            geolocation: {},
            autocomplete: {},
            messages: {geolocating: "Geolocating..."},
            warnings: {
                default: "Where will your next meal be?",
                invalidLocation: "Oops... Please select a valid location.",
                noGeolocator: "Geolocator not available. Please key in manually."
            },
            arbValue: 2
        }

    }

    componentDidMount() {
        this.setState({ autocomplete: new google.maps.places.Autocomplete(ReactDOM.findDOMNode(this.refs.locationString)) });
    }

    render() {

        return (
            <Col>
                <Form id="homepage" className="centerComponent" inline onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup  bsSize="large">
                        <FormControl id="locationForm" type="text" placeholder={this.state.warnings.default} ref="locationString" onChange={this.autocompleteDone.bind(this)}/>
                    </FormGroup>
                    <Button bsStyle="primary" bsSize="large" onClick={this.geolocate.bind(this)}><Glyphicon glyph="map-marker" /></Button>
                    {'   '}
                    <Button type="submit" bsSize="large">Submit</Button>
                    <Export props={this.props}/>
                </Form>
            </Col>
        )
    }

    geolocate(e) {
        e.preventDefault();
        let self = this;
        const noGeolocate = self.state.warnings.noGeolocator;
        let locationStringPlaceholder = ReactDOM.findDOMNode(self.refs.locationString);

        if (navigator.geolocation) {
            locationStringPlaceholder.placeholder = self.state.messages.geolocating;
            navigator.geolocation.getCurrentPosition(function(position, error) {
                if (error) {
                    console.log("Geolocation error");
                    locationStringPlaceholder.placeholder = noGeolocate;
                } else {

                }
                var geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                self.props.dispatch(setCoords(geolocation));
                self.reverseGeoCode(geolocation);
            });
        } else {
            locationStringPlaceholder.placeholder = noGeolocate;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const geolocation = this.props.search;
        console.log(ReactDOM.findDOMNode(this.refs.locationString).value);
        console.log(Object.keys(geolocation).length)
        if (Object.keys(geolocation).length == 0) {
            ReactDOM.findDOMNode(this.refs.locationString).placeholder = this.state.warnings.invalidLocation;
        } else {
            browserHistory.push("/choice");
        }
    }

    autocompleteDone() {
        let self = this;
        this.state.autocomplete.addListener('place_changed', function() {
            let coords = {
                    lat: self.state.autocomplete.getPlace().geometry.location.lat(),
                    lng: self.state.autocomplete.getPlace().geometry.location.lng()
                };
            console.log("Raw Coords", coords);
            self.props.dispatch(setCoords(coords));
                }
            )
        }

    reverseGeoCode(coords) {
        console.log("Raw Coords", coords);
        let locationString = ReactDOM.findDOMNode(this.refs.locationString);
        let geocoder = new google.maps.Geocoder;
        let self = this;
        geocoder.geocode({location: coords}, function(results, status) {
            if (status == 'OK') {
                console.log(results);
                locationString.placeholder = self.state.warnings.default;
                locationString.value = self.state.arbValue;
                locationString.value = results[0]["formatted_address"];
            } else {
                console.log(status)
            }
        });
    }

}
