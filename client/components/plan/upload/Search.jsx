import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {browserHistory} from 'react-router';
import {Col, ButtonGroup, Button, FormControl} from 'react-bootstrap';
import _ from 'lodash';

import {callSearchApi} from '../../../actions/fourSquareVenueSearchActions';

@connect((store) => {
    return {
        data: store.search.data,
        err: store.search.err
    };
})

export default class Type extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedVenues: [[{id: "1879hhsgfa",
                categories: "meat",
                name: "Johnston's",
                address: "blah",
                distance: 2351,
                checkin: 321
            }]],
            allVenues: [],
            data: {"meta":{"code":200,"requestId":"57ef09eb498e7cc5ea61d4c7"},"response":{"venues":[{"id":"4eaef4f4722e4efd614ddb80","name":"MEAT Liquor","contact":{"phone":"+442072244239","formattedPhone":"+44 20 7224 4239","twitter":"meatliquor"},"location":{"address":"74 Welbeck St","crossStreet":"at Henrietta Pl","lat":51.51546962015043,"lng":-0.1486051082611084,"labeledLatLngs":[{"label":"display","lat":51.51546962015043,"lng":-0.1486051082611084}],"distance":1976,"postalCode":"W1G 0BA","cc":"GB","city":"Marylebone","state":"Greater London","country":"United Kingdom","formattedAddress":["74 Welbeck St (at Henrietta Pl)","Marylebone","Greater London","W1G 0BA","United Kingdom"]},"categories":[{"id":"4bf58dd8d48988d16c941735","name":"Burger Joint","pluralName":"Burger Joints","shortName":"Burgers","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/burger_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":13291,"usersCount":8819,"tipCount":475},"url":"http:\/\/www.meatliquor.com","hasMenu":true,"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https:\/\/foursquare.com\/v\/meat-liquor\/4eaef4f4722e4efd614ddb80\/menu","mobileUrl":"https:\/\/foursquare.com\/v\/4eaef4f4722e4efd614ddb80\/device_menu"},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1475283435","venueChains":[],"hasPerk":false},{"id":"4f966afbe4b03217df20a47e","name":"MEATmarket","contact":{"phone":"+442072404852","formattedPhone":"+44 20 7240 4852","twitter":"meatmarketuk"},"location":{"address":"Jubilee Market Hall","crossStreet":"Tavistock St","lat":51.51150689149124,"lng":-0.12177228927612305,"labeledLatLngs":[{"label":"display","lat":51.51150689149124,"lng":-0.12177228927612305}],"distance":1012,"postalCode":"WC2E 8BD","cc":"GB","city":"Covent Garden","state":"Greater London","country":"United Kingdom","formattedAddress":["Jubilee Market Hall (Tavistock St)","Covent Garden","Greater London","WC2E 8BD","United Kingdom"]},"categories":[{"id":"4bf58dd8d48988d16c941735","name":"Burger Joint","pluralName":"Burger Joints","shortName":"Burgers","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/burger_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":5336,"usersCount":2829,"tipCount":158},"url":"http:\/\/www.themeatmarket.co.uk","hasMenu":true,"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https:\/\/foursquare.com\/v\/meatmarket\/4f966afbe4b03217df20a47e\/menu","mobileUrl":"https:\/\/foursquare.com\/v\/4f966afbe4b03217df20a47e\/device_menu"},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1475283435","venueChains":[],"hasPerk":false},{"id":"4bd34f149854d13a7f76fd4d","name":"The Meat Co","contact":{"phone":"+442087495914","formattedPhone":"+44 20 8749 5914"},"location":{"address":"Unit 1026, Westfield London","crossStreet":"Ariel Way","lat":51.505998614887915,"lng":-0.21883275033106164,"labeledLatLngs":[{"label":"display","lat":51.505998614887915,"lng":-0.21883275033106164}],"distance":6308,"postalCode":"W12 7GA","cc":"GB","city":"London","state":"Greater London","country":"United Kingdom","formattedAddress":["Unit 1026, Westfield London (Ariel Way)","London","Greater London","W12 7GA","United Kingdom"]},"categories":[{"id":"4bf58dd8d48988d1cc941735","name":"Steakhouse","pluralName":"Steakhouses","shortName":"Steakhouse","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/steakhouse_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":2291,"usersCount":1683,"tipCount":81},"url":"http:\/\/themeatco.com\/index.php\/westfield-london","hasMenu":true,"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https:\/\/foursquare.com\/v\/the-meat-co\/4bd34f149854d13a7f76fd4d\/menu","mobileUrl":"https:\/\/foursquare.com\/v\/4bd34f149854d13a7f76fd4d\/device_menu"},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1475283435","venueChains":[{"id":"556e51d6bd6a82902e2825b1"}],"hasPerk":false},{"id":"50c35e21e4b08c3b59223478","name":"MEAT Mission","contact":{"phone":"+442077398212","formattedPhone":"+44 20 7739 8212","twitter":"meatmission"},"location":{"address":"14-15 Hoxton Market","lat":51.52723559044546,"lng":-0.08248329162597656,"labeledLatLngs":[{"label":"display","lat":51.52723559044546,"lng":-0.08248329162597656}],"distance":4126,"postalCode":"N1 6HG","cc":"GB","city":"Hoxton","state":"Greater London","country":"United Kingdom","formattedAddress":["14-15 Hoxton Market","Hoxton","Greater London","N1 6HG","United Kingdom"]},"categories":[{"id":"4bf58dd8d48988d16c941735","name":"Burger Joint","pluralName":"Burger Joints","shortName":"Burgers","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/burger_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":7321,"usersCount":3857,"tipCount":248},"url":"http:\/\/www.meatmission.com","hasMenu":true,"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https:\/\/foursquare.com\/v\/meat-mission\/50c35e21e4b08c3b59223478\/menu","mobileUrl":"https:\/\/foursquare.com\/v\/50c35e21e4b08c3b59223478\/device_menu"},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1475283435","venueChains":[],"hasPerk":false},{"id":"51be158c498ecc571208ea51","name":"Meat Lover @ Filthy MacNasty's","contact":{"phone":"+442078373133","formattedPhone":"+44 20 7837 3133","twitter":"meatloverldn"},"location":{"address":"68 Amwell St","crossStreet":"at Inglebert St","lat":51.52988209767982,"lng":-0.1103675365447998,"labeledLatLngs":[{"label":"display","lat":51.52988209767982,"lng":-0.1103675365447998}],"distance":3203,"postalCode":"EC1R 1UU","cc":"GB","city":"Islington","state":"Greater London","country":"United Kingdom","formattedAddress":["68 Amwell St (at Inglebert St)","Islington","Greater London","EC1R 1UU","United Kingdom"]},"categories":[{"id":"4bf58dd8d48988d1df931735","name":"BBQ Joint","pluralName":"BBQ Joints","shortName":"BBQ","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/bbqalt_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":77,"usersCount":56,"tipCount":3},"url":"http:\/\/www.meatlover.info","hasMenu":true,"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https:\/\/foursquare.com\/v\/meat-lover--filthy-macnastys\/51be158c498ecc571208ea51\/menu","mobileUrl":"https:\/\/foursquare.com\/v\/51be158c498ecc571208ea51\/device_menu"},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1475283435","venueChains":[],"hasPerk":false},{"id":"56264862498e0abad6db6f23","name":"MEAT Liquor","contact":{"phone":"+442037110104","formattedPhone":"+44 20 3711 0104","twitter":"meatliquorn1","facebook":"441618979329977","facebookName":"MEATliquor N1"},"location":{"address":"133B Upper St","lat":51.539167935300945,"lng":-0.10290837259382159,"labeledLatLngs":[{"label":"display","lat":51.539167935300945,"lng":-0.10290837259382159}],"distance":4356,"postalCode":"N1 1QP","cc":"GB","city":"Islington","state":"Greater London","country":"United Kingdom","formattedAddress":["133B Upper St","Islington","Greater London","N1 1QP","United Kingdom"]},"categories":[{"id":"4bf58dd8d48988d16c941735","name":"Burger Joint","pluralName":"Burger Joints","shortName":"Burgers","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/burger_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":553,"usersCount":368,"tipCount":27},"url":"http:\/\/meatliquor.com\/n1\/","allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1475283435","venueChains":[],"hasPerk":false},{"id":"53f73e55498e0d297edafbe3","name":"Boarstall Meat Market","contact":{},"location":{"address":"Lower Marsh","crossStreet":"Johanna Street","lat":51.50130947655674,"lng":-0.11454485084615397,"labeledLatLngs":[{"label":"display","lat":51.50130947655674,"lng":-0.11454485084615397}],"distance":950,"cc":"GB","city":"Lambeth North","country":"United Kingdom","formattedAddress":["Lower Marsh (Johanna Street)","Lambeth North","United Kingdom"]},"categories":[{"id":"4bf58dd8d48988d154941735","name":"Cuban Restaurant","pluralName":"Cuban Restaurants","shortName":"Cuban","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/cuban_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":5,"usersCount":4,"tipCount":0},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1475283435","venueChains":[],"hasPerk":false},{"id":"55731730498e37ff69f9d6ad","name":"Lobos Meat and Tapas","contact":{"phone":"+442074075361","formattedPhone":"+44 20 7407 5361","twitter":"lobostapas","facebook":"1604491549829769","facebookUsername":"lobostapas","facebookName":"Lobos Meat & Tapas"},"location":{"address":"14 Borough High St","lat":51.505572997103,"lng":-0.0891077174403164,"labeledLatLngs":[{"label":"display","lat":51.505572997103,"lng":-0.0891077174403164}],"distance":2700,"postalCode":"SE1 9QG","cc":"GB","city":"London","state":"Greater London","country":"United Kingdom","formattedAddress":["14 Borough High St","London","Greater London","SE1 9QG","United Kingdom"]},"categories":[{"id":"4bf58dd8d48988d1db931735","name":"Tapas Restaurant","pluralName":"Tapas Restaurants","shortName":"Tapas","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/tapas_","suffix":".png"},"primary":true}],"verified":true,"stats":{"checkinsCount":220,"usersCount":195,"tipCount":12},"url":"http:\/\/lobostapas.co.uk","hasMenu":true,"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https:\/\/foursquare.com\/v\/lobos-meat-and-tapas\/55731730498e37ff69f9d6ad\/menu","mobileUrl":"https:\/\/foursquare.com\/v\/55731730498e37ff69f9d6ad\/device_menu"},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"venuePage":{"id":"130722984"},"storeId":"","hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1475283435","venueChains":[],"hasPerk":false},{"id":"4f0b659ae4b0cc066f384c66","name":"Meat People","contact":{"phone":"+442073595361","formattedPhone":"+44 20 7359 5361","twitter":"meatpeopleangel","facebook":"204263782999509","facebookName":"Meat People"},"location":{"address":"4-6 Essex Rd","lat":51.5364593200558,"lng":-0.10170936584472656,"labeledLatLngs":[{"label":"display","lat":51.5364593200558,"lng":-0.10170936584472656}],"distance":4117,"postalCode":"N1 8LN","cc":"GB","city":"London","state":"Greater London","country":"United Kingdom","formattedAddress":["4-6 Essex Rd","London","Greater London","N1 8LN","United Kingdom"]},"categories":[{"id":"4bf58dd8d48988d1cc941735","name":"Steakhouse","pluralName":"Steakhouses","shortName":"Steakhouse","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/steakhouse_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":618,"usersCount":428,"tipCount":34},"url":"http:\/\/meatpeople.co.uk","hasMenu":true,"menu":{"type":"Menu","label":"Menu","anchor":"View Menu","url":"https:\/\/foursquare.com\/v\/meat-people\/4f0b659ae4b0cc066f384c66\/menu","mobileUrl":"https:\/\/foursquare.com\/v\/4f0b659ae4b0cc066f384c66\/device_menu"},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1475283435","venueChains":[],"hasPerk":false},{"id":"4cb868b2bac93704ef7ddc7c","name":"MEAT","contact":{},"location":{"address":"01. 0G.2 The Leathermarket, 11-13 Weston Street","crossStreet":"Leathermarket Street","lat":51.50016764414252,"lng":-0.08471488952636719,"labeledLatLngs":[{"label":"display","lat":51.50016764414252,"lng":-0.08471488952636719}],"distance":3012,"postalCode":"SE1 3ER","cc":"GB","city":"London","state":"Greater London","country":"United Kingdom","formattedAddress":["01. 0G.2 The Leathermarket, 11-13 Weston Street (Leathermarket Street)","London","Greater London","SE1 3ER","United Kingdom"]},"categories":[{"id":"4bf58dd8d48988d124941735","name":"Office","pluralName":"Offices","shortName":"Office","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/building\/default_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":3,"usersCount":3,"tipCount":0},"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1475283435","venueChains":[],"hasPerk":false}]}}
        }
    }

    componentWillMount() {
        const venues = this.state.data.response.venues
            .map(venue => ({
                id: venue.id,
                categories: venue.categories[0].shortName,
                name: venue.name,
                address: venue.location.formattedAddress,
                distance: venue.location.distance,
                checkin: venue.stats.checkinsCount,
                display: true,
            }));
        this.setState({ allVenues: venues});
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.data);
        if (nextProps.data.length) {
            const venues = nextProps.data
                .map(venue => ({
                    id: venue.id,
                    categories: venue.categories[0].shortName,
                    name: venue.name,
                    address: venue.location.formattedAddress,
                    distance: venue.location.distance,
                    checkin: venue.stats.checkinsCount,
                    display: true,
                }));
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
            }
            this.setState({ allVenues: [venue] }, console.log("Nothing found"));
        }
    }

    render() {
        const style = {
        }

        return (
            <Col smOffset={3} sm={6} mdOffset={3} md={6}>
                <div>
                    {
                        this.state.selectedVenues.map(entry => <span key={entry[0].id}>{entry[0].name}</span>)
                    }
                    <Button bsStyle="primary" onClick={this.generatePlan.bind(this)} ref="decrement"> I'm ready! </Button>
                    <FormControl ref="placeQuery" placeholder="Start typing" />
                    <Button onClick={this.search.bind(this)} ref="getPlaces"> Search </Button>

                    { _.filter(this.state.allVenues, { display: true})
                        .map(venue =>
                        (<div key={venue.id}>
                            <p>Name: {venue.name}</p>
                            <p>Distance: {venue.distance}m</p>
                            <p>Address: {venue.address.map(part => <span>{part+" "}</span>)}</p>
                            <p>Check In: {venue.checkin}</p>
                            <p>Categories: {venue.categories}</p>
                            <Button onClick={this.addEntry.bind(this, venue.id)}>Add</Button>
                        </div>)

                    )
                    }



                </div>
            </Col>
        )
    }

    generatePlan(e) {
        e.preventDefault();
        browserHistory.push('/results');
    }

    addEntry(ref) {
        console.log(ref);
        console.log(this.state.allVenues);
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

    search() {
        const query = ReactDOM.findDOMNode(this.refs.placeQuery).value;
        this.props.dispatch(callSearchApi(query));
    }

}