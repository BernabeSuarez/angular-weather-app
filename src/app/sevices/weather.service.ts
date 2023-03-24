import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../models/weather.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  /*private URI: string = 'https://jsonplaceholder.typicode.com/posts';*/

  constructor(private http: HttpClient) {}

  getPosts(cityName: string): Observable<Weather> {
    let url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`;
    return this.http.get<Weather>(url, {
      headers: {
        'X-RapidAPI-Key': 'b171dc23b4mshd740ca65483359ap15397djsn0b06ab55b310',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    });
  }
}
