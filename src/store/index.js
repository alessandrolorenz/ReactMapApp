import { createStore } from 'redux';

const INITIAL_STATE = {
  value: -27.601268,
  value1: -48.521822,
  step: 0.01,
  viewport: {
    latitude: -27.601268,
    longitude: -48.521822,
    zoom: 12.8,
    bearing: 0,
    pitch: 0
  },
  location: {
    latitude: -0,
    longitude: 0,
  }
}

function reducer(state = INITIAL_STATE, action) {

  if (action.type === 'CHANGE_VALUE') {
    return { ...state, value: action.value }
  }
  if (action.type === 'CHANGE_VALUE1') {
    return { ...state, value1: action.value1 }
  }
  if (action.type === 'CHANGE_VALUE1ADD') {
    return { ...state, value1: action.value1 }
  }
  if (action.type === 'CHANGE_VALUEADD') {
    return { ...state, value: action.value }
  }
  if (action.type === 'SET_VIEWPORT') {
    return { ...state, viewport: action.viewport }
  }
  if (action.type === 'CHANGE_LOCATION') {
    return { ...state, viewport: action.payload }
  }
  if (action.type === 'DEC1') {
    return { ...state, value1: state.value1 - state.step }
  }
  if (action.type === 'INC1') {
    return { ...state, value1: state.value1 + state.step }
  }
  return state;
}

const store = createStore(reducer);

export default store;