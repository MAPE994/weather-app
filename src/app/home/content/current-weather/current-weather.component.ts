import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { CurrentWeatherState } from '../../../interface'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  weather : CurrentWeatherState
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getWeatherData();
  }

  logWeather(): void{
    console.log(this.weather);
  }

  getWeatherData(): void {
    this.userService.getCurrentWeather().subscribe(data => this.weather = {
      currentTemperature: data.main.temp,
      minTemperature: data.main.temp_min,
      maxTemperature: data.main.temp_max,
      description: data.weather[0].description    
    },
    (error) => console.log(error)
    );
  }
}
