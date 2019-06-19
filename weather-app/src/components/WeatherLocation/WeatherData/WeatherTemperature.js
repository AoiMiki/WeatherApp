import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD, CLOUDY, SUNNY, RAIN, SNOW, WINDY,} from './../../../constants/weathers'

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUNNY]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};
const getWeatherIcon =(weatherState) => {
    const icon = icons[weatherState];
    const sizeIcon = "3x";
    if(icon)
        return <WeatherIcons name={icon} size={sizeIcon}/>;
    else
        return <WeatherIcons name={"day-sunny"} size={sizeIcon}/>;
};
const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        <span className="wicon">{getWeatherIcon(weatherState)}</span>
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;