import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isButtonClicked = false;
  array = [];
  currentNumber = 1;

  onClick() {
    this.array.push(this.currentNumber);
    this.currentNumber++;
    this.isButtonClicked = !this.isButtonClicked;
  }

  getColor(a) {
    return a > 5 ? 'blue' : 'white';
  }
}
