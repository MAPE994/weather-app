import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderComponent } from './header/header.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component'
import { UserService } from '../../shared/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentHeaderComponent,
    CurrentWeatherComponent,
    WeatherForecastComponent,

  ],
  exports: [
    ContentHeaderComponent,
    CurrentWeatherComponent,
    WeatherForecastComponent,
  ],
  providers: [
    UserService
  ] 
})
export class ContentModule { }
