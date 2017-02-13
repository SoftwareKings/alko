const { RNLocation: Location } = require('NativeModules');

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

  checkPermission(cb) {
    Location.getAuthorizationStatus((authorization) => {
      cb(authorization);
    });
  }

}
