import { Component } from '@angular/core';
import {WeatherService}   from '../Services/weather.service'; // Import weather API
import {Storage} from '@ionic/storage'; // Imports Storage 


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  WeatherData:any=[];//Array to store API array data
  searchCity:string = ""; // Entered City String
  savedCity:string;

  constructor(private weatherService:WeatherService, private storage:Storage) { }

  // Function that enters searched city into the API link and pulls the data from the API
  performSearch(){
    console.log(this.searchCity); // Console test for input
    this.weatherService.GetSearchData(this.searchCity).subscribe(
      (data)=>{
        this.WeatherData = data.weather;//Assign the API array weather
        this.weatherObject.temperature = data['main']['temp'];//Assigns temperature object 
        this.weatherObject.feelslike = data['main']['feels_like']; //Assigns weather+humidity object 
        this.weatherObject.countryID = data['sys']['country']; // Assigns country ID 
        this.weatherObject.cityname = data['name']; // Assigns city name object
        this.weatherObject.windspeed = data['wind']['speed']; // Assigns wind speed
        this.weatherObject.image = 'http://openweathermap.org/img/w/' + data['weather'][0]['icon'] + ".png";// Assign image 
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

  // Function that locally stores favourite city as a variable
  onSaveCity(){
    console.log(this.savedCity); // Console test for saving variable
    this.storage.set("savedCity", this.savedCity);

    const allInfo = `${this.savedCity} is saved as your favourite city!`; 
    alert(allInfo); // Alert user of saving favourite city 
  }
  
} 