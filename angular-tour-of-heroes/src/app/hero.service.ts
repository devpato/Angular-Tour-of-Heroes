import { Injectable } from "@angular/core";
import { Hero } from "./hero.module";
import { HEROES } from "./mock-heroes";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HeroService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getHeroes(): Observable<any> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }
}
