import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent  {
topic = ['Angular', 'React', 'Vue'];
  userModel = new User('Bob', 'rob@gmail.com',9960749504,'default','morning');
}

