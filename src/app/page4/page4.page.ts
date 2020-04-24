import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor(private storage:Storage) { }

  ngOnInit() {
  }
    
  // Function locally stores form details
  saveForm() {

    // Console test for saving variables
    console.log(this.name); 
    console.log(this.email);
    console.log(this.message);

    // Locally storing details
    this.storage.set("name", this.name); 
    this.storage.set("email", this.email);
    this.storage.set("message", this.message);
  }
}
