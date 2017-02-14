import Permissions from 'react-native-permissions';

export const requestPermission = (type = 'whenInUse') => new Promise((success) => {
  Permissions.getPermissionStatus('location', type)
    .then((response) => {
      if (response !== 'authorized') {
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
