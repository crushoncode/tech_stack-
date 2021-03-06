import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// reducers produce application states
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
