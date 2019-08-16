import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import { getWeatherData } from './actions';

function App({
  fetchingWeatherData,
  receivedWeatherData,
  error,
  weatherData,
  getWeatherData,
}) {
  return (
    <div className="App">
      <button onClick={() => getWeatherData('location/2487956/')}>get weather data</button>
      {fetchingWeatherData && <p>loading...</p>}
      {error.status && <p>{error.message}</p>}
      {receivedWeatherData && JSON.stringify(weatherData)}
    </div>
  );
}

const mapStateToProps = ({
  fetchingWeatherData,
  receivedWeatherData,
  error,
  weatherData,
}) => {
  return {
    fetchingWeatherData,
    receivedWeatherData,
    error,
    weatherData,
  };
}

export default connect(mapStateToProps, { getWeatherData })(App);
