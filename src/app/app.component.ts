import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WhymeComponent } from "./whyme/whyme.component";
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, NavbarComponent, WhymeComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
