import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  state: 'eng' | 'ger' = 'eng'


    setLanguageState(pagestate: 'eng' | 'ger'){
      if( pagestate !=  this.state){
        this.state = pagestate
      }
    }

}
