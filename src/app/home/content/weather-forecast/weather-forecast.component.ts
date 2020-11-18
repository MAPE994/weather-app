import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { CurrentWeatherState } from '../../../interface'
import * as moment from 'moment';


@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit {
  constructor(private userService: UserService) {}
  weatherForecast: Array<CurrentWeatherState>

  ngOnInit() {
    this.getWeatherData();
  }

  logWeather() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.userService.getWeatherForecast().subscribe((data) => {
      let forecast: Array<CurrentWeatherState> = [],
          currentWeatherState: CurrentWeatherState

      data.daily.forEach((daily) => {
        currentWeatherState = {
          currentTemperature: daily.temp.day,
          minTemperature: daily.temp.min,
          maxTemperature: daily.temp.max,
          description: daily.weather[0].description,
          dateTime: moment.unix(daily.dt).format("MMMM Do YYYY")
        };
        forecast.push(currentWeatherState);
      });
      this.weatherForecast = forecast;
    },
    (error) => console.log(error)
    );
  }

}
