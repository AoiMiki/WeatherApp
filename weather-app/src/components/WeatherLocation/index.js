import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {CLOUD, CLOUDY, SUNNY, RAIN, SNOW, WINDY,} from '../../constants/weathers'

const data = {
    temperature: 5,
    weatherState: SUNNY,
    humidity: 10,
    wind: '10 m/s',
}

class weatherLocation extends Component{
    handleUpdateClick = () => {
        console.log("Actualizado")
    }
    render(){
        return(
            <div className="weatherLocationCont">
                <Location city={"Castro"}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default weatherLocation;