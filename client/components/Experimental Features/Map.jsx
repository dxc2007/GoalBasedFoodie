import React from 'react';
import ReactDOM from 'react-dom';

const style = {
  width: "500px",
  height: "300px"
};

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autocomplete: {},
      map: {},
      place: {},
      marker: {}

  }
}

render() {
  return (
      <div>
          <input type="text" placeholder="Start typing" ref="locationString" onChange={this.autocompleteDone.bind(this)}></input>
          <button label="Get Location" onClick={this.geolocate.bind(this)}/>
        <div style={style} ref="map" />
      </div>
  )
}

componentDidMount() {
  this.setState({ map: new google.maps.Map(ReactDOM.findDOMNode(this.refs.map), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13
        })
  }, this.setMarker.bind(this, {lat: -33.8688, lng: 151.2195}));
  this.setState({ autocomplete: new google.maps.places.Autocomplete(this.refs.locationString) });
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
      self.state.map.setCenter(geolocation);
      self.setMarker(geolocation)
    });
  }
}

  handleSubmit(e) {
    e.preventDefault();
    console.log(ReactDOM.findDOMNode(this.refs.locationString).value);
  }

  autocompleteDone() {
    let self = this;
    this.state.autocomplete.addListener('place_changed', function() {
        self.setState({ place: self.state.autocomplete.getPlace()}, self.refreshMap.bind(self))
    });
  }

  refreshMap() {
    console.log(this.state.place);
    if (this.state.place.geometry.viewport) {
      this.state.map.fitBounds(this.state.place.geometry.viewport);
    } else {
      this.state.map.setCenter(this.state.place.geometry.location);
      this.state.map.setZoom(17);  // Why 17? Because it looks good.
    }
  }

  setMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: this.state.map
    });
  }
}
