import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { About } from "../about/about";
import { Skills } from "../skills/skills";
import { Projects } from "../projects/projects";

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
