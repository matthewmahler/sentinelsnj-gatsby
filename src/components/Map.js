import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import FakeData from './FakeData';

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyDDnP_ODt-LxGUfCoo05ht0AbL2sx20XkA&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={2} defaultCenter={{ lat: 41.492, lng: -74.901 }}>
    {props.isMarkerShown
      ? FakeData.map((marker, i) => {
          return (
            <Marker
              key={i}
              position={{
                lat: marker.venue.latitude,
                lng: marker.venue.longitude,
              }}
              onClick={props.onMarkerClick}
            />
          );
        })
      : null}
  </GoogleMap>
));

class MapContainer extends React.PureComponent {
  state = {
    isMarkerShown: false,
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}
export default MapContainer;
