import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux"

import {browserHistory} from 'react-router';
import {Form, FormGroup,  Col, Button,  FormControl, Glyphicon} from 'react-bootstrap';

import {setCoords} from '../actions/fourSquareVenueSearchActions'

@connect((store) => {
    return {
        search: store.search.coords,
    };
})

export default class Homepage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            geolocation: {},
            autocomplete: {}
        }
    }

    componentDidMount() {
        this.setState({ autocomplete: new google.maps.places.Autocomplete(ReactDOM.findDOMNode(this.refs.locationString)) });
    }

    render() {

        return (

            <Col id="homepage" class="centerComponent" smOffset={2} sm={8} mdOffset={3} md={6}>
                <h2>Where will your next meal be?</h2>
                <Form inline onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="location">
                        <FormControl type="text" placeholder="Start typing" ref="locationString" onChange={this.autocompleteDone.bind(this)}/>
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.geolocate.bind(this)}><Glyphicon glyph="map-marker" /></Button>
                    {'   '}
                    <Button type="submit">Submit</Button>
                </Form>
            </Col>
        )
    }

    geolocate(e) {
        e.preventDefault();
        let self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                self.props.dispatch(setCoords(geolocation));
                self.reverseGeoCode(geolocation);
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(ReactDOM.findDOMNode(this.refs.locationString).value);
        browserHistory.push("/choice");
    }

    autocompleteDone() {
        let self = this;
        this.state.autocomplete.addListener('place_changed', function() {
            let coords = {
                    lat: self.state.autocomplete.getPlace().geometry.location.lat(),
                    lng: self.state.autocomplete.getPlace().geometry.location.lng()
                }
            console.log("Raw Coords", coords);
            self.props.dispatch(setCoords(coords));
                }

            )
        }


    reverseGeoCode(coords) {
        console.log("Raw Coords", coords);
        let geocoder = new google.maps.Geocoder;
        let self = this;
        geocoder.geocode({location: coords}, function(results, status) {
            if (status == 'OK') {
                console.log(results)
                ReactDOM.findDOMNode(self.refs.locationString).value = results[0]["formatted_address"];
            } else {
                console.log(status)
            }
        });
    }
}
