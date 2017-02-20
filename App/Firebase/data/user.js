import { FirebaseObject } from '../../Firebase';
import authActions from '../../Redux/AuthRedux';

// class User {
//   constructor(props) {
//     this.displayName = props.displayName;
//   }
// }

export default new FirebaseObject({
  onAdd: authActions.createProfilePropertyFulfilled,
  onChange: authActions.updateProfilePropertyFulfilled,
  onLoad: authActions.getProfileFulfilled,
  onRemove: authActions.deleteProfilePropertyFulfilled,
});
