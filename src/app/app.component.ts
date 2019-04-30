import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-demo';

  performAction(): void{
    alert("Button is Clicked...");
    this.title="Binding-Demo in Angular";
  }
}
