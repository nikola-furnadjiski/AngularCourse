import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <p> This is the success alert component! </p>
`,
  styles: [`
    p {
      padding: 20px;
      border: 1px solid green;
      background-color: palegreen;
    }
  `]
})
export class SuccessAlertComponent {
}
