import Axios from "axios";

export const FETCH_WEATHER_DATA_START = 'FETCH_WEATHER_DATA_START';
export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
export const FETCH_WEATHER_DATA_FAILURE = 'FETCH_WEATHER_DATA_FAILURE';

export const getWeatherData = (query) => (dispatch) => {
  (async () => {
    dispatch({ type: FETCH_WEATHER_DATA_START });
    try {
      const response = await Axios.get(`https://www.metaweather.com/api/${query}`);
      console.log(response);
      dispatch({ type: FETCH_WEATHER_DATA_SUCCESS, payload: {}});
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_WEATHER_DATA_FAILURE, payload: 'error from response'});
    }
  })();
};
