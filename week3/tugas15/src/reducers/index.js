import { combineReducers } from 'redux';
import counter from './counter';
import joke from './joke';

export default combineReducers({ counter, joke });
