import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { TimePlace } from '../../../interface'
import * as moment from 'moment';

@Component({
  selector: 'app-content-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class ContentHeaderComponent implements OnInit {
  constructor(private userService: UserService) {}
  timePlace: TimePlace

  ngOnInit() {
    this.getTimePlaceData();
  }

  getTimePlaceData () {
    this.userService.getCurrentWeather().subscribe(data => this.timePlace = {
      dt: moment.unix(data.dt).format("MMMM Do YYYY"),
      location: data.name
  })
}

}
