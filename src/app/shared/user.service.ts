import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CurrentWeather, WeatherForecast } from '../interface'
import { Observable } from 'rxjs';


@Injectable()
export class UserService {
  constructor (
    private http: HttpClient
  ) {}

  getCurrentWeather(): Observable<CurrentWeather>{
    return this.http.get<CurrentWeather>(`http://api.openweathermap.org/data/2.5/weather?q=Maribor&units=metric&appid=ca2295085ec8c9e3999205ea4c66fb66`);
  }

  getWeatherForecast(): Observable<WeatherForecast> {
    return this.http.get<WeatherForecast>(`https://api.openweathermap.org/data/2.5/onecall?lat=46.554650&lon=15.645881&units=metric&exclude=current,minutely,hourly,alert&appid=ca2295085ec8c9e3999205ea4c66fb66`);
  }

}