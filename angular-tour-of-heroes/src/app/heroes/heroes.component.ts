import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero.module";
import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service";
import { Observable } from "rxjs/Observable";
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

  heroes$: Observable<any>;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() {
    return (this.heroes$ = this.heroService.getHeroes());
  }
}
