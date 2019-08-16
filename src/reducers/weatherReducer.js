import {
  FETCH_WEATHER_DATA_START,
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_FAILURE,
} from '../actions';

const initialState = {
  fetchingWeatherData: false,
  receivedWeatherData: false,
  error: {
    status: false,
    message: '',
  },
  weatherData: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER_DATA_START:
      return {
        ...state,
        fetchingWeatherData: true,
      };
    case FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        fetchingWeatherData: false,
        receivedWeatherData: true,
        weatherData: payload,
      };
    case FETCH_WEATHER_DATA_FAILURE:
      return {
        ...state,
        fetchingWeatherData: false,
        error: {
          status: true,
          message: payload,
        }
      };
    default:
      if (state === initialState) return state;
      else throw new Error(`${type} is not a valid type for weatherReducer`);
  }
};
