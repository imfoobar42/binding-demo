import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-demo';
  rating=3.2;
  starWidth= this.rating*(75/5) ;
  starColor= 'red';
  customerName= "Alex";
  performAction(): void{
    alert("Button is Clicked...");
    this.title="Binding-Demo in Angular";
  }

}
