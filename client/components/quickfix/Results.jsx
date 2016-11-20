import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {browserHistory} from 'react-router';
import {ButtonGroup, Button} from 'react-bootstrap';

import {callOneOffApi} from '../../actions/fourSquareVenueSearchActions';

@connect((store) => {
    return {
        data: store.search.data,
        err: store.search.err
    };
})

export default class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
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

}