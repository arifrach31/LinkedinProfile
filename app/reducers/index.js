import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import navReducer from './nav';
import profilesReducer from './profile';
import highlightsReducer from './highlights';

const appReducer = combineReducers({
  nav: navReducer,
  profilesReducer: profilesReducer,
  highlightsReducer: highlightsReducer,
  form : formReducer
});

export default appReducer;
