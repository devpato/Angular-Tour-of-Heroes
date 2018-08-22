import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero.module";
import { HEROES } from "../mock-heroes";
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

  heroes = HEROES;
  constructor() {}

  ngOnInit() {}

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
