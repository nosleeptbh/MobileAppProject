import { Component, OnInit } from '@angular/core';
import {WeatherService}   from '../Services/weather.service'; // Import weather API
import {Storage} from '@ionic/storage'; // Imports Storage 

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
WeatherData:any=[];//Array to store API array data
favouritecity: string = ""; 
firstname: string ="";

  constructor(private weatherService:WeatherService, private storage:Storage) { }

  ngOnInit() {

    // Calls in firstname from Contact Us page and displays on page 2
    this.storage.get("name").then(
      (data)=>{
        this.firstname = data;
      }
      ).catch(
        (error)=>{
          console.log(error);  
        }
      );
    
    // Calls in saved City from homepage and displays on page 2
    this.storage.get("savedCity").then(
    (data)=>{
      this.favouritecity = data;
    }
    ).catch(
      (error)=>{
        console.log(error);  
      }
    );

    // Searchs api of saved city from homepage (not working)
    // I tried to save an input from homepage as favourite city that would update the api and always display that favourite city on page 2 
    // but I could not figure out how to manipulate the data into my api
    this.weatherService.GetSearchData(this.favouritecity).subscribe( 
      (data)=>{
        this.WeatherData = data.weather;
        this.weatherObject.temperature = data['main']['temp'];
        this.weatherObject.feelslike = data['main']['feels_like']; 
        this.weatherObject.countryID = data['sys']['country']; 
        this.weatherObject.cityname = data['name']; 
        this.weatherObject.windspeed = data['wind']['speed']; 
        this.weatherObject.image = 'http://openweathermap.org/img/w/' + data['weather'][0]['icon'] + ".png";
      }
    );

  }
  weatherObject = { // Object to store data from API object
    temperature: 0,
    description: '',
    feelslike: 0,
    countryID: '',
    cityname: '',
    windspeed: 0,
    image: ''
  };
}
