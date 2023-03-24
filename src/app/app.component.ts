import { Component, OnInit } from '@angular/core';
import { DataService } from './sevices/weather.service';
import { Weather } from './models/weather.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weather: Weather;
  defaultCity: string = 'Buenos Aires';
  constructor(private data: DataService) {}

  ngOnInit() {
    this.getWeather(this.defaultCity);
  }

  getWeather(cityname: string) {
    this.data.getPosts(cityname).subscribe((data) => (this.weather = data));
    console.log(this.weather);
  }
  submitCity(city: HTMLInputElement) {
    this.getWeather(city.value);
    console.log(city.value);
    city.value = '';
    city.focus();
    return false;
  }
}
