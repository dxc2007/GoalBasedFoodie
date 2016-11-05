import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import Homepage from './Homepage.jsx';
import Choice from './Choice.jsx';

export default class AppMain extends React.Component {
  constructor(props) {
    super(props)

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
      const style = {
          width: "80vw",
          height: "300px",
          margin: "10vw",
          border: "1px solid grey",
          padding: "100px 1px"
      }

    return (
          <Jumbotron style={style}>
              <Choice />
          </Jumbotron>
    )

  }

   setLatLng(coords) {
       console.log("AppMain.js received coords", coords);
       this.setState({latlng: coords});
   }

}
