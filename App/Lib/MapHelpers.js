// @flow
/* eslint-disable consistent-return, array-callback-return */
import R from 'ramda';

export const removeEmpty = (markers: Array<Object>) => {
  const filteredMarkers = R.filter(item => item.latitude && item.longitude, markers);
  return filteredMarkers;
};

export const calculateRegion = (locations: Array<Object>, options: Object) => {
  const latPadding = options && options.latPadding ? options.latPadding : 0.1;
  const longPadding = options && options.longPadding ? options.longPadding : 0.1;
  const mapLocations = removeEmpty(locations);
  // Only do calculations if there are locations
  if (mapLocations.length > 0) {
    const allLatitudes = R.map((l) => {
      if (l.latitude && !l.latitude.isNaN) return l.latitude;
    }, mapLocations);

    const allLongitudes = R.map((l) => {
      if (l.longitude && !l.longitude.isNaN) return l.longitude;
    }, mapLocations);

    const minLat = R.reduce(R.min, Infinity, allLatitudes);
    const maxLat = R.reduce(R.max, -Infinity, allLatitudes);
    const minLong = R.reduce(R.min, Infinity, allLongitudes);
    const maxLong = R.reduce(R.max, -Infinity, allLongitudes);

    const middleLat = (minLat + maxLat) / 2;
    const middleLong = (minLong + maxLong) / 2;
    const latDelta = (maxLat - minLat) + latPadding;
    const longDelta = (maxLong - minLong) + longPadding;

    // return markers
    return {
      latitude: middleLat,
      longitude: middleLong,
      latitudeDelta: latDelta,
      longitudeDelta: longDelta,
    };
  }
};
