import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';// Http module to enable the app to take data from an API
import {Observable} from 'rxjs';
import { Capability } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  

  constructor(private http:HttpClient) { } // Assigns HttpClient to variable http


  GetSearchData(city:string):Observable<any>{ // Makes the GetSearchData Observable and hold any information <any>

    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=d298ad5138a64763c52934385b56f41c');  
    // Returns information got from the API weather link based on what city you enter on homepage

  }


}