import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageServiceService } from '../../services/language-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  state: 'eng' | 'ger' = 'eng';

  activeElement: 'why' | 'skill' | 'project' | 'contact' | 'none' = 'none';

  database = inject(LanguageServiceService);

  setLanguageState(pagestate: 'eng' | 'ger') {
    if (pagestate != this.state) {
      this.state = pagestate;
    }
    this.database.setLanguage(pagestate);
  }

  setNavbarState(activNavElem: 'why' | 'skill' | 'project' | 'contact' | 'none' ){
    if(activNavElem != this.activeElement){
      this.activeElement = activNavElem;
    }

  }

}
