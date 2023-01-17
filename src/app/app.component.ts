import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  date = new Date();
  price = 10000;
  title = 'abc def hij';
  search: string;
  list = [
    'Pavan',
    'Meena',
    'Mitesh',
    'Vijay'
  ];
}
