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
  changeColor(t: number){
    const color = Colors[t];
    const a: any = color.id;
    const b: any = document.getElementById(a);
    color.hex = b.value;
  }
}


