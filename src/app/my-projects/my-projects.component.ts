import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { SharkyComponent } from './sharky/sharky.component';
import { JoinComponent } from './join/join.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [MatTabsModule,CommonModule, SharkyComponent, JoinComponent, PokemonComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {


     projects = [{title: 'Join', component: JoinComponent },
      {title: 'Pokemon', component: PokemonComponent },
      {title: 'Sharky', component: SharkyComponent },
      ];


      activeIndex = 0;


  selectProject(index: number) {
    this.activeIndex = index;
  }
}
