import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {

  currentWeather: Observable<String[]>;

  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    console.log("init");
  }

  public getPosts() {
    this.currentWeather = this.http.get<any[]>('http://api.openweathermap.org/data/2.5/weather?q=Maribor&units=metric&appid=ca2295085ec8c9e3999205ea4c66fb66');

    }
}
