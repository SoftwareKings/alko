import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import { calculateRegion } from '../Lib/MapHelpers';
import MapCallout from '../Components/MapCallout';
import Styles from './Styles/MainScreenStyle';

class MainScreen extends Component {
  /* ***********************************************************
  * This example is only intended to get you started with the basics.
  * There are TONS of options available from traffic to buildings to indoors to compass and more!
  * For full documentation, see https://github.com/lelandrichardson/react-native-maps
  *************************************************************/

  constructor(props) {
    super(props);
    /* ***********************************************************
    * STEP 1
    * Set the array of locations to be displayed on your map. You'll need to define at least
    * a latitude and longitude as well as any additional information you wish to display.
    *************************************************************/
    const locations = [
      { title: 'Location A', latitude: 37.78825, longitude: -122.4324 },
      { title: 'Location B', latitude: 37.75825, longitude: -122.4624 },
    ];
    /* ***********************************************************
    * STEP 2
    * Set your initial region either by dynamically calculating from a list of locations (as below)
    * or as a fixed point, eg: { latitude: 123, longitude: 123, latitudeDelta: 0.1, longitudeDelta: 0.1}
    *************************************************************/
    const region = calculateRegion(locations, { latPadding: 0.05, longPadding: 0.05 });
    this.state = {
      region,
      locations,
      showUserLocation: true,
    };
    this.renderMapMarkers = this.renderMapMarkers.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  componentWillReceiveProps(newProps) {
    /* ***********************************************************
    * STEP 3
    * If you wish to recenter the map on new locations any time the
    * Redux props change, do something like this:
    *************************************************************/
    // this.setState({
    //   region: calculateRegion(newProps.locations, { latPadding: 0.1, longPadding: 0.1 })
    // })
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  onRegionChange(newRegion) {
    /* ***********************************************************
    * STEP 4
    * If you wish to fetch new locations when the user changes the
    * currently visible region, do something like this:
    *************************************************************/
    // const searchRegion = {
    //   ne_lat: newRegion.latitude + newRegion.latitudeDelta,
    //   ne_long: newRegion.longitude + newRegion.longitudeDelta,
    //   sw_lat: newRegion.latitude - newRegion.latitudeDelta,
    //   sw_long: newRegion.longitude - newRegion.longitudeDelta
    // }
    // Fetch new data...
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  scalloutPress(location) {
    /* ***********************************************************
    * STEP 5
    * Configure what will happen (if anything) when the user
    * presses your callout.
    *************************************************************/
    console.tron.log(location);
  }

  renderMapMarkers(location) {
    /* ***********************************************************
    * STEP 6
    * Customize the appearance and location of the map marker.
    * Customize the callout in ../Components/MapCallout.js
    *************************************************************/

    return (
      <MapView.Marker key={location.title} coordinate={{ latitude: location.latitude, longitude: location.longitude }}>
        <MapCallout location={location} onPress={this.calloutPress} />
      </MapView.Marker>
    );
  }

  render() {
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.mapContainer}>
          <MapView
            style={Styles.map}
            initialRegion={this.state.region}
            onRegionChangeComplete={this.onRegionChange}
            showsUserLocation={this.state.showUserLocation}
          >
            {this.state.locations.map(location => this.renderMapMarkers(location))}
          </MapView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.auth.profile,
});

//eslint-disable-next-line
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
