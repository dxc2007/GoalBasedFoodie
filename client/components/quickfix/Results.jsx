import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {ButtonGroup, Button} from 'react-bootstrap';

export default class Type extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            data: {"meta":{"code":200,"requestId":"581e92f69fb6b7228f5b4266"},"response":{"venues":[{"id":"4c73ca290e23b1f7743d21dc","name":"Hong Sheng Kitchen | 鸿升小厨","location":{"address":"#01-807, Blk 225 Jurong East St 24","lat":1.341575,"lng":103.736279,"labeledLatLngs":[{"label":"display","lat":1.341575,"lng":103.736279}],"distance":127,"cc":"SG","country":"Singapore","formattedAddress":["#01-807, Blk 225 Jurong East St 24","Singapore"]},"categories":[{"id":"4bf58dd8d48988d145941735","name":"Chinese Restaurant","pluralName":"Chinese Restaurants","shortName":"Chinese","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/asian_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":370,"usersCount":84,"tipCount":1},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1478398710","venueChains":[],"hasPerk":false},{"id":"4b6d58b3f964a52018722ce3","name":"Zai Shun Curry Fish Head Seafood 载顺小食（夜市）","location":{"address":"Blk 253 Jurong East Street 24. #01-205","lat":1.34363638347244,"lng":103.7371104857434,"labeledLatLngs":[{"label":"display","lat":1.34363638347244,"lng":103.7371104857434}],"distance":285,"cc":"SG","city":"Singapore","country":"Singapore","formattedAddress":["Blk 253 Jurong East Street 24. #01-205","Singapore"]},"categories":[{"id":"4bf58dd8d48988d145941735","name":"Chinese Restaurant","pluralName":"Chinese Restaurants","shortName":"Chinese","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/asian_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":1462,"usersCount":745,"tipCount":31},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":3,"summary":"3 people are here","groups":[{"type":"others","name":"Other people here","count":3,"items":[]}]},"referralId":"v-1478398710","venueChains":[],"hasPerk":false},{"id":"4d1b46d46526a35d322c0e16","name":"Jia Wang Fish Head Steamboat","location":{"address":"Blk 225 Jurong East St 21","lat":1.341500513100762,"lng":103.73708220111229,"labeledLatLngs":[{"label":"display","lat":1.341500513100762,"lng":103.73708220111229}],"distance":53,"cc":"SG","city":"Singapore","country":"Singapore","formattedAddress":["Blk 225 Jurong East St 21","Singapore"]},"categories":[{"id":"4bf58dd8d48988d145941735","name":"Chinese Restaurant","pluralName":"Chinese Restaurants","shortName":"Chinese","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/asian_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":31,"usersCount":14,"tipCount":1},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1478398710","venueChains":[],"hasPerk":false},{"id":"4c12d592a1010f479ea44918","name":"Tiong Bahru Pau & Snack","location":{"lat":1.3437984387602537,"lng":103.73814005038551,"labeledLatLngs":[{"label":"display","lat":1.3437984387602537,"lng":103.73814005038551}],"distance":316,"cc":"SG","country":"Singapore","formattedAddress":["Singapore"]},"categories":[{"id":"4bf58dd8d48988d1e0931735","name":"Coffee Shop","pluralName":"Coffee Shops","shortName":"Coffee Shop","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/coffeeshop_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":520,"usersCount":238,"tipCount":4},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1478398710","venueChains":[],"hasPerk":false},{"id":"4ce34ba9bddcb1f75be57b89","name":"303 Jurong Food House","location":{"address":"303 Jurong East St 32","lat":1.3446108980250508,"lng":103.73500046867517,"labeledLatLngs":[{"label":"display","lat":1.3446108980250508,"lng":103.73500046867517}],"distance":469,"postalCode":"600303","cc":"SG","city":"Singapore","country":"Singapore","formattedAddress":["303 Jurong East St 32","600303","Singapore"]},"categories":[{"id":"4bf58dd8d48988d1e0931735","name":"Coffee Shop","pluralName":"Coffee Shops","shortName":"Coffee Shop","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/coffeeshop_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":4239,"usersCount":556,"tipCount":13},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1478398710","venueChains":[],"hasPerk":false},{"id":"4ce22758f8a4a143b9f6eebc","name":"Hup Hong Chicken Rice","location":{"address":"Yuhua Village Market & Food Centre","crossStreet":"254 Jurong East St","lat":1.343489099557057,"lng":103.7374725295498,"labeledLatLngs":[{"label":"display","lat":1.343489099557057,"lng":103.7374725295498}],"distance":269,"cc":"SG","city":"Singapore","country":"Singapore","formattedAddress":["Yuhua Village Market & Food Centre (254 Jurong East St)","Singapore"]},"categories":[{"id":"4bf58dd8d48988d145941735","name":"Chinese Restaurant","pluralName":"Chinese Restaurants","shortName":"Chinese","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/asian_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":209,"usersCount":40,"tipCount":1},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1478398710","venueChains":[],"hasPerk":false},{"id":"52a45389498ef5c565fc4ad5","name":"財鱼片、牛肉、鲜虾、什锦河粉","location":{"lat":1.343634,"lng":103.737895,"labeledLatLngs":[{"label":"display","lat":1.343634,"lng":103.737895}],"distance":292,"cc":"SG","country":"Singapore","formattedAddress":["Singapore"]},"categories":[{"id":"4bf58dd8d48988d145941735","name":"Chinese Restaurant","pluralName":"Chinese Restaurants","shortName":"Chinese","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/asian_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":5,"usersCount":5,"tipCount":0},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1478398710","venueChains":[],"hasPerk":false},{"id":"4f3f8757e4b0ac94162fc537","name":"荣盛鱼头米粉","location":{"lat":1.343452,"lng":103.737624,"labeledLatLngs":[{"label":"display","lat":1.343452,"lng":103.737624}],"distance":266,"cc":"SG","country":"Singapore","formattedAddress":["Singapore"]},"categories":[{"id":"4bf58dd8d48988d145941735","name":"Chinese Restaurant","pluralName":"Chinese Restaurants","shortName":"Chinese","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/asian_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":56,"usersCount":15,"tipCount":2},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1478398710","venueChains":[],"hasPerk":false},{"id":"51c4304f498e73948a0d890e","name":"Uncle Leong Seafood","location":{"address":"262 Jurong East Street 24 #01-485","lat":1.3442037954522412,"lng":103.7409006803799,"labeledLatLngs":[{"label":"display","lat":1.3442037954522412,"lng":103.7409006803799}],"distance":530,"postalCode":"600262","cc":"SG","country":"Singapore","formattedAddress":["262 Jurong East Street 24 #01-485","600262","Singapore"]},"categories":[{"id":"4bf58dd8d48988d145941735","name":"Chinese Restaurant","pluralName":"Chinese Restaurants","shortName":"Chinese","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/asian_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":243,"usersCount":191,"tipCount":3},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1478398710","venueChains":[],"hasPerk":false},{"id":"4c9d90bd8afca093da79f815","name":"Nan Nan Curry","location":{"address":"Blk 303 Jurong East Street 32","lat":1.344665,"lng":103.73492,"labeledLatLngs":[{"label":"display","lat":1.344665,"lng":103.73492}],"distance":479,"postalCode":"600303","cc":"SG","city":"Singapore","country":"Singapore","formattedAddress":["Blk 303 Jurong East Street 32","600303","Singapore"]},"categories":[{"id":"4bf58dd8d48988d145941735","name":"Chinese Restaurant","pluralName":"Chinese Restaurants","shortName":"Chinese","icon":{"prefix":"https:\/\/ss3.4sqi.net\/img\/categories_v2\/food\/asian_","suffix":".png"},"primary":true}],"verified":false,"stats":{"checkinsCount":144,"usersCount":46,"tipCount":0},"allowMenuUrlEdit":true,"beenHere":{"unconfirmedCount":0,"marked":false,"lastCheckinExpiredAt":0},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"summary":"Nobody here","groups":[]},"referralId":"v-1478398710","venueChains":[],"hasPerk":false}],"confident":true}},
            sortedData: []
        }
    }

    componentWillMount() {
        //this.props.callApi.bind(this);
        let sortedData = this.state.data.response.venues.map(venue =>
            ({
                categories: venue.categories[0].shortName,
                name: venue.name,
                address: venue.location.formattedAddress,
                distance: venue.location.distance,
                checkin: venue.stats.checkinsCount
            })

            );
        this.setState({sortedData: sortedData}, console.log(sortedData));
    }




    render() {
        const style = {
        }

        return (
            <div ref="listOfResults">

                {/*Check out RBS Pager Pager, Pager.Item*/}
                    <div>
                        {this.state.sortedData.slice(this.state.counter, this.state.counter + 1).map(venue =>
                            (<div key={venue.name} style={style}>
                                <p>Name: {venue.name}</p>
                                <p>Distance: {venue.distance}m</p>
                                <p>Address: {venue.address}</p>
                                <p>Check In: {venue.checkin}</p>
                                <p>Categories: {venue.categories}</p>
                            </div>)
                        )}
                    </div>

                <Button onClick={this.decrement.bind(this)} ref="decrement"> - </Button>
                <Button onClick={this.increment.bind(this)} ref="increment"> + </Button>
            </div>
        )
    }

    decrement() {
        console.log("before: ", this.state.counter);
        this.setState((prevState, props) => {
            if (prevState.counter <= 0) {
                return {counter: prevState.sortedData.length - 1}
            } else {
                return {counter: prevState.counter - 1};
            }

        },
            console.log("after: ", this.state.counter)
        );
    }

    increment() {
        console.log("before: ", this.state.counter);
        this.setState((prevState, props) => {
            if (prevState.counter >= prevState.sortedData.length - 1) {
                return {counter: 0};
            } else {
                return {counter: prevState.counter + 1};
            }
        },
            console.log("after: ", this.state.counter)
        );
    }

}