let instance = null

export default class LocationHelper {

  static getInstance () {
    if (!instance) {
      instance = new LocationHelper()
    }
    return instance
  }

  requestWhenInUsePermission () {
    console.log('Not yet implemented')
  }

  checkPermission (cb) {
    return cb('authorizedWhenInUse')
  }

}
