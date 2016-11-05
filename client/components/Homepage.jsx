import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import {Form, FormGroup,  Col, Button,  FormControl, Glyphicon} from 'react-bootstrap';

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
            <Col smOffset={3} sm={6} mdOffset={4} md={4}>
                <Form inline onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="location">
                        <FormControl type="text" placeholder="Start typing" ref="locationString" onChange={this.autocompleteDone.bind(this)}/>
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.geolocate.bind(this)}><Glyphicon glyph="map-marker" /></Button>
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
                this.setState({ geolocation: coords }, self.reverseGeoCode(geolocation));
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(ReactDOM.findDOMNode(this.refs.locationString).value);

        let self = this;
        $.ajax({
            url: this.state.foursquare.mainLink,
            data: {
                "client_id": this.state.foursquare.cliendId,
                "client_secret": this.state.foursquare.clientSecret,
                v: this.state.foursquare.v,
                ll: this.state.latlng.lat + "," + this.state.latlng.lng,
                query: this.state.foursquare.query,
                limit: this.state.foursquare.limit,
                intent: this.state.foursquare.intent,
                m: this.state.foursquare.m,
            },
            success: function(response) {
                console.log(response);
                self.setState({ data: response },
                    browserHistory.push('/map')
                );
            },
            error: function(xhr) {
                console.log(xhr);
            }
        });
    }

    autocompleteDone() {
        let self = this;
        this.state.autocomplete.addListener('place_changed', function() {
            self.setState({ latlng: {
                    lat: self.state.autocomplete.getPlace().geometry.location.lat(),
                    lng: self.state.autocomplete.getPlace().geometry.location.lng()
                }
                },
                this.props.setLatLng.bind(this, coords)
            )
        });
    }

    reverseGeoCode(coords) {
        console.log("Raw Coords", coords);
        this.props.setLatLng.bind(this, coords);
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
