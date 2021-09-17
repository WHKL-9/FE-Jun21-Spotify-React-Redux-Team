import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import playlistReducer from "../reducers/playlist";
import playReducer from "../reducers/play";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const initialState = {
  play: {
    //   empty object will always return true 
    // setting it to null is a safer option 
      currentSong: (null)
  },
  playlist: {
    tracks: [],
    loading: true, 
    error: false
  },
};

const bigReducer = combineReducers({
    play: playReducer,
    playList: playlistReducer
})

export const configureStore = createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))

)

