import { createReducer, createActions } from 'reduxsauce';
import { requestingMember } from '../Fixtures/drinkupMembers';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  barRequest: ['barId'],
  barRequestSuccesful: ['bar'],
  barRequestFailure: ['error'],
  membersRequest: ['barId'],
  membersRequestSuccesful: ['members'],
  membersRequestFailure: ['error'],
  joinDrinkup: ['member'],
  leaveDrinkup: ['member'],
});

export const DrinkupTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  joined: false,
  bar: null,
  members: [],
  fetching: false,
};

/* ------------- Reducers ------------- */

export const barRequest = (state: Object) => Object.assign({}, state, {
  fetching: true,
});


export const barRequestSuccesful = (state: Object, { bar }) => Object.assign({},
  state,
  {
    fetching: false,
    bar,
  }
);

export const barRequestFailure = (state: Object, { error }) => Object.assign({},
  state,
  {
    fetching: false,
    bar: null,
    error,
  }
);

export const membersRequest = (state: Object) => Object.assign({}, state, {
  fetching: true,
});


export const membersRequestSuccesful = (state: Object, { members }) => Object.assign({},
  state,
  {
    fetching: false,
    members: [
      // Draft before using firebase
      ...state.joined ? [...members, requestingMember] : [...members],
    ],
  }
);

export const membersRequestFailure = (state: Object, { error }) => Object.assign({},
  state,
  {
    fetching: false,
    members: [],
    error,
  }
);

export const joinDrinkup = (state: Object, { member }) => Object.assign({},
  state,
  {
    joined: true,
    members: [
      ...state.members,
      member,
    ],
  }
);

export const leaveDrinkup = (state: Object, { member }) => Object.assign({},
  state,
  {
    joined: false,
    // only for demo draft.
    members: state.members.filter(drinkUpMember => member.name !== drinkUpMember.name),
  }
);
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.BAR_REQUEST]: barRequest,
  [Types.BAR_REQUEST_SUCCESFUL]: barRequestSuccesful,
  [Types.BAR_REQUEST_FAILURE]: barRequestFailure,
  [Types.MEMBERS_REQUEST]: membersRequest,
  [Types.MEMBERS_REQUEST_SUCCESFUL]: membersRequestSuccesful,
  [Types.MEMBERS_REQUEST_FAILURE]: membersRequestFailure,
  [Types.JOIN_DRINKUP]: joinDrinkup,
  [Types.LEAVE_DRINKUP]: leaveDrinkup,
});
