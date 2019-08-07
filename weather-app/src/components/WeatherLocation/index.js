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
    constructor(){
        super();
        this.state ={
            city: 'Santiago',
            data: data,
        };
    }

    handleUpdateClick = () => {
        console.log("Actualizado")
    }

    render(){
        const{city,data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default weatherLocation;