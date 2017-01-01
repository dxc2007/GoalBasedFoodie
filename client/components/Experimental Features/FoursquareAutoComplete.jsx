import Autosuggest from 'react-autosuggest';
import React from 'react';

import {connect} from 'react-redux';

import {setVenues} from '../../actions/userActions';
import {callSearchApi, callPopularApi, callMultipleApi} from '../../actions/fourSquareVenueSearchActions';

// import theme from '../../../public/css/autoCompleteTheme.css';
//import not working trying something else

const style = {
    p: {
        backgroundColor: "white",
        fontFamily: "Helvetica Neue, Avenir, sans-serif"
    },
}

// Imagine you have a list of venues that you'd like to auto suggest.
let venues = [
    {
        name: "Chelsea Piers"
    }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : venues;
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <div style={style}>
        {suggestion.name}<br/>
        {suggestion.distance}m<br/>
        {suggestion.address[0]}
    </div>
);

const renderSuggestionsContainer = ({ children, ...rest }) => (
    <div {...rest}>
        {children}
        {
            children === null ? null :
                <div className="footer">
                    Powered by react-autosuggest and Foursquare
                </div>
        }
    </div>
);

@connect((store) => {
    return {
        data: store.search.data,
        err: store.search.err,
    }
})

export default class FoursquareAutoComplete extends React.Component {
    constructor() {
        super();
        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            value: '',
            suggestions: []
        };
    }

    componentWillReceiveProps(nextProps) {
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
            const allVenues = nextProps.data
                .map(venue => mapVenues(venue));
            venues = allVenues;
            console.log(venues);
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
            venues = venue;
            console.log(venues);
        }
    }


    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        },
            this.props.dispatch(callSearchApi(newValue)));
    //    foursquare api call here
    };

    getSuggestionValue = suggestion => {
        console.log("Adding", suggestion.name);
        this.props.addEntryAutocomplete.bind(this, suggestion);
        return suggestion.name;
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input element.
        const inputProps = {
            placeholder: 'Type a venue',
            value,
            onChange: this.onChange
        };

        // Finally, render it!
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                renderSuggestionsContainer={renderSuggestionsContainer}
            />
        );
    }
}