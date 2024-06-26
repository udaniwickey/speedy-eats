import {legacy_createStore as createStore} from 'redux';
import reducer from './reducers/index';

export default function configureStore(initialState: string) {
  const store = createStore(reducer, initialState);
  return store;
}
