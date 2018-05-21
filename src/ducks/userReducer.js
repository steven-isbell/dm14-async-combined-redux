import axios from 'axios';

const GET_PEOPLE = 'GET_PEOPLE';

export function getPeople() {
  return {
    type: GET_PEOPLE,
    payload: axios.get('https://www.swapi.co/api/people')
  };
}

const initialState = {
  people: [],
  selected: {},
  isLoading: false
};

export default function userReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case `${GET_PEOPLE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_PEOPLE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        people: action.payload.data.results
      };
    default:
      return state;
  }
}
