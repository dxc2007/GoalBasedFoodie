import React from 'react';
import {Col, Jumbotron} from 'react-bootstrap';

export default class AppMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        data: {},
        latlng: {},
        query: "meat",
        limit: 10,
        foursquare: {
            mainLink: "https://api.foursquare.com/v2/venues/search",
            cliendId: "PGJIGCAHNKFUYF0SIAP51HC3NWKRQAXVB02BTPSDQJFWOHNP",
            clientSecret:"OWEQ325MR2JIVYMZB5Q2JVRE0AGGQFFVASXZVURJNM2QWLDD",
            v: 20160606,
            intent: "checkin",
            m: "foursquare"
      }
  }
}

  render() {


    return (
        <Col id="appMain">
              {this.props.children}
        </Col>
    )

  }

   setLatLng(coords) {
       console.log("AppMain.js received coords", coords);
       this.setState({latlng: coords});
   }

}
