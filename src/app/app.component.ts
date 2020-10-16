import { Component } from '@angular/core';
import { Color } from './colors/color';
import { Colors } from './colors/Colors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  color: Color;
  rainbow = '';
  colors = Colors;

  constructor() {
  }
  // tslint:disable-next-line:typedef
  changeColor(t:number){
    let color = Colors[t];
    let a: any = color.id;
    let b: any = document.getElementById(a);
    color.hex = b.value;
  }
}


