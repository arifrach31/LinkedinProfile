import RootNavigators from '../navigators/RootNavigators';

const initialState = RootNavigators.router.getStateForAction(RootNavigators.router.getActionForPathAndParams("ProfileList"));

const navReducer = (state = initialState, action) => {
  const nextState = RootNavigators.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;