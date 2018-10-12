import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

// reducers produce application states
export default combineReducers({
  libraries: LibraryReducer
});
