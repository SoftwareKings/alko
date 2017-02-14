import Permissions from 'react-native-permissions';

export const requestPermission = (type = 'whenInUse') => new Promise((success, reject) => {
  Permissions.getPermissionStatus('location', type)
    .then((response) => {
      if (response === 'restricted') {
        // restricted:
        // (iOS only) user is not able to grant this permission, either because it's
        // not supported by the device or because it has been blocked by parental controls.
        reject(response);
      } else if (response !== 'authorized') {
        Permissions.requestPermission('location', type)
        .then((permissionResponse) => {
          if (permissionResponse !== 'authorized') {
            success(false);
          } else {
            success(true);
          }
        });
      } else {
        success(true);
      }
    });
});
