import { Injectable } from "@angular/core";
import { Hero } from "./hero.module";
import { HEROES } from "./mock-heroes";

@Injectable()
export class HeroService {
  constructor() {}

  getHeroes(): Hero[] {
    return HEROES;
  }
}
