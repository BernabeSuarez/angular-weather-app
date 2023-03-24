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
  defaultCity: string = 'buenos aires';
  isDay: number = 0;
  day: string = '../assets/day-bg.jpg';
  night: string = '../assets/night-bg.jpg';
  loader: boolean = true;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.getWeather(this.defaultCity);
  }

  getWeather(cityname: string) {
    this.loader = true;
    this.data.getPosts(cityname).subscribe((data) => {
      this.weather = data;
      this.isDay = this.weather.current.is_day;
      this.loader = false;
      console.log(data);
    });
    console.log(this.weather);
  }
  submitCity(city: HTMLInputElement) {
    if (city.value == '') {
      alert('Por favor ingrese una ciudad...');
      return false;
    } else {
      this.getWeather(city.value);
      console.log(city.value);
      city.value = '';
      city.focus();
      return false;
    }
  }
}
