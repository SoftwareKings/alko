import React from 'react-native';
import Permissions from 'react-native-permissions';

export const requestPermission = (type = 'whenInUse') => {
  return new Promise((success, resolve) => {
    Permissions.getPermissionStatus('location', type)
      .then(response => {
        if(response !== 'authorized') {
          Permissions.requestPermission('location', type)
          .then(response => {
            if(response !== 'authorized') {
              success(false);
            } else {
              success(true);
            }
          });
        } else {
          success(true);
        }
      })
  });
};
