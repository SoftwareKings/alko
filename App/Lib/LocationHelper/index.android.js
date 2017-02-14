let instance = null;

export default class LocationHelper {

  static getInstance() {
    if (!instance) {
      instance = new LocationHelper();
    }
    return instance;
  }

  static requestWhenInUsePermission() {
    console.log('Not yet implemented');
  }

  static checkPermission(cb) {
    return cb('authorizedWhenInUse');
  }

}
