import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import MapView from 'react-native-maps';
import { getDistance } from 'geolib';

import { Images } from '../Themes';

import { calculateRegion } from '../Lib/MapHelpers';
import MapCallout from '../Components/MapCallout';
import BarResult from '../Components/BarResult';
import Banner from '../Components/Banner';
import Styles from './Styles/MapScreenStyle';
import LocationActions from '../Redux/LocationRedux';

const METRES_TO_MILES_FACTOR = 0.000621371192237;

class MapScreen extends Component {

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

    const bars = [
      {
        name: 'Mountain Sun',
        location: {
          latitude: 37.785484,
          longitude: -122.408709,
        },
        activeDrinkUp: false,
        promotions: [],
      },
      {
        name: 'Bohemian Biergarten',
        location: {
          latitude: 37.789782,
          longitude: -122.407192,
        },
        activeDrinkUp: true,
        promotions: ['twoForOne'],
      },
      {
        name: 'Bitter Bar',
        location: {
          latitude: 37.788038,
          longitude: -122.404612,
        },
        activeDrinkUp: false,
        promotions: [],
      },
      {
        name: 'Kitchen Next Door',
        location: {
          latitude: 37.782860,
          longitude: -122.409341,
        },
        activeDrinkUp: false,
        promotions: ['twoForOne'],
      },
      {
        name: 'Licence No 1',
        location: {
          latitude: 37.783211,
          longitude: -122.402859,
        },
        activeDrinkUp: true,
        promotions: [],
      },
      {
        name: 'Jill\'s at the St Julian',
        location: {
          latitude: 37.781183,
          longitude: -122.406475,
        },
        activeDrinkUp: false,
        promotions: [],
      },
    ];

    /* ***********************************************************
    * STEP 2
    * Set your initial region either by dynamically calculating from a list of locations (as below)
    * or as a fixed point, eg: { latitude: 123, longitude: 123, latitudeDelta: 0.1, longitudeDelta: 0.1}
    *************************************************************/
    const region = calculateRegion(bars.map(bar => bar.location), { latPadding: 0.003, longPadding: 0.0001 });
    this.state = {
      region,
      bars,
      showUserLocation: true,
    };
    this.renderMapMarkers = this.renderMapMarkers.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentPosition();
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

  renderMapMarkers(bar) {
    /* ***********************************************************
    * STEP 6
    * Customize the appearance and location of the map marker.
    * Customize the callout in ../Components/MapCallout.js
    *************************************************************/
    const { name, location, activeDrinkUp, promotions } = bar;

    let image = '';
    if (bar.activeDrinkUp && promotions.includes('twoForOne')) {
      image = Images.pinMugSeal;
    } else if (activeDrinkUp) {
      image = Images.pinMug;
    } else if (promotions.includes('twoForOne')) {
      image = Images.pinSeal;
    } else {
      image = Images.pin;
    }

    return (
      <MapView.Marker key={name} coordinate={{ latitude: location.latitude, longitude: location.longitude }} image={image}>
        <MapCallout location={location} onPress={this.calloutPress} />
      </MapView.Marker>
    );
  }

  renderBarResult(bar, key) {
    const { name, activeDrinkUp, promotions, location } = bar;

    const props = {
      name,
      activeDrinkUp,
      promotions,
      key,
      onPress: NavigationActions.bar,
    };

    if (this.props.currentPosition) {
      const { latitude, longitude, accuracy } = this.props.currentPosition.coords;
      const start = {
        latitude,
        longitude,
      };
      const distance = getDistance(start, location, accuracy);
      props.distance = `${(distance * METRES_TO_MILES_FACTOR).toFixed(2)}mi`;
    } else {
      props.distance = '';
    }

    return (
      <BarResult {...props}></BarResult>
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
            {this.state.bars.map((bar, i) => this.renderMapMarkers(bar, i))}
          </MapView>
          <View style={Styles.bannerContainer}>
            <Banner text={I18n.t('Main_banner_title')} shape={Images.shape} />
          </View>
        </View>

        <ScrollView style={Styles.barListContainer}>
          {this.state.bars.map((bar, i) => this.renderBarResult(bar, i))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.auth.profile,
  currentPosition: state.location.position,
});

//eslint-disable-next-line
const mapDispatchToProps = dispatch => ({
  getCurrentPosition: () => dispatch(LocationActions.locationRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
