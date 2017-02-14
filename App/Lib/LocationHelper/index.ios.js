import React from 'react-native';

const Location = React.NativeModules.RNLocation;
let instance = null;
export default class LocationHelper {

  static getInstance() {
    if (!instance) {
      instance = new LocationHelper();
    }
    return instance;
  }

  requestWhenInUsePermission() {
    this.checkPermission((authorization) => {
      if (authorization !== 'authorizedWhenInUse') {
        Location.requestWhenInUseAuthorization();
      }
    });
  }

  static checkPermission(cb) {
    Location.getAuthorizationStatus((authorization) => {
      cb(authorization);
    });
  }

}