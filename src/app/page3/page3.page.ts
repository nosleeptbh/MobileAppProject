import { Component } from '@angular/core';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx'; // Imports InAppBrowser Plugin

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page {

  constructor(private iab: InAppBrowser) { } // Assigns InAppBrowser Plugin to variable iab

  // Link to sites
  performBrowser(){
    const browser = this.iab.create('https://climate.nasa.gov/');
  }

  performBrowser2(){
    const browser = this.iab.create('https://www.un.org/en/sections/issues-depth/climate-change/');
  }

  performBrowser3(){
    const browser = this.iab.create('https://www.ipcc.ch/');
  }

}
