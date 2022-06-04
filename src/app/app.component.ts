import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fitness-Track-App';
  @ViewChild('sidenav') sidenav: any;
  
  onToggle(){
  }
}
