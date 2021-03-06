import {combineReducers} from 'redux';
import roomReducer from './room.reducer';
import localUserReducer from './localUser.reducer';
import peersReducer from './peers.reducer';
import connectionsReducer from './connections.reducer';
import remoteStreamsReducer from './remoteStreams.reducer';
import pluginReducer from './plugin.reducer';
import chatReducer from './chat.reducer';

const reducer = combineReducers({
  room: roomReducer,
  localUser: localUserReducer,
  peers: peersReducer,
  connections: connectionsReducer,
  remoteStreams: remoteStreamsReducer,
  plugin: pluginReducer,
  chat: chatReducer
});

export default reducer;
