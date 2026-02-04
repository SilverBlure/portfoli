import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss'
})
export class TeamplayerComponent {

}
