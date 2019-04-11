import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myValue: string;
  title = 'InputOutput';

  constructor() {
    setInterval(() => {
      this.myValue = new Date().toISOString();
    }, 1000);
  }

  myOutputEvent(data: any): void {
    console.log('button click, fired from event Emitter!');

  }
}
