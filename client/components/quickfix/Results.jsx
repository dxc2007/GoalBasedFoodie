import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router';
import {Button} from 'react-bootstrap';

import {callOneOffApi} from '../../actions/fourSquareVenueSearchActions';

@connect((store) => {
    return {
        data: store.search.data,
        err: store.search.err,
        coords: store.search.coords
    };
})

export default class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    componentWillMount() {
        this.props.dispatch(callOneOffApi())
    }

    render() {
        const style = {

        };
        const { data, err } = this.props;

        console.log(data);

        if (!data.length) {
            return <div>Waiting</div>
        }



        return (
            <div ref="listOfResults">

                {/*Check out RBS Pager Pager, Pager.Item*/}
                <div className="contentBox">
                    {data.slice(this.state.counter, this.state.counter + 1).map(venue =>
                        (<div key={venue.name} style={style}>
                            <p>Name: {venue.name}</p>
                            <p>Distance: {venue.location.distance}m</p>
                            <p>Address: {venue.location.formattedAddress.map(part => <span>{part+" "}</span>)}</p>
                            <p>Check In: {venue.stats.checkinsCount}</p>
                            <p>Categories: {venue.categories[0].shortName}</p>
                            <p>Directions: <Link to={this.generateGoogleDirectionsURL(venue.location.formattedAddress)} target="_blank" ><Button>Google Maps</Button></Link></p>
                        </div>)
                    )}
                </div>

                <Button onClick={this.decrement.bind(this)} ref="decrement"> Prev </Button>
                <Button onClick={this.increment.bind(this)} ref="increment"> Next </Button>
            </div>
        )
    }

    decrement() {
        console.log("before: ", this.state.counter);
        let venueLength = this.props.data.length;
        this.setState((prevState, props) => {
            if (prevState.counter <= 0) {
                return {counter: venueLength - 1}
            } else {
                return {counter: prevState.counter - 1};
            }

        },
            console.log("after: ", this.state.counter)
        );
    }

    increment() {
        console.log("before: ", this.state.counter);
        let venueLength = this.props.data.length;
        this.setState((prevState, props) => {
            if (prevState.counter >= venueLength - 1) {
                return {counter: 0};
            } else {
                return {counter: prevState.counter + 1};
            }
        },
            console.log("after: ", this.state.counter)
        );
    }

    generateGoogleDirectionsURL(venueAddress) {
    return ("https://www.google.com/maps/dir/" + this.props.coords.lat + "," + this.props.coords.lng + "/" + venueAddress + "/");
    }

}