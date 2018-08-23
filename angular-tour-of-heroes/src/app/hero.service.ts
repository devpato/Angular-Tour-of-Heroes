import { Injectable } from "@angular/core";
//import { Hero } from "./hero.module";
//import { HEROES } from "./mock-heroes";
import { Observable } from "rxjs/Observable";
//import { of } from "rxjs/observable/of";
import { MessageService } from "./message.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { _throw } from "rxjs/observable/throw";

@Injectable()
export class HeroService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  BASE_URL = "https://unidosmexico85.firebaseio.com";
  HEROES_URL = "/heroes.json";

  getHeroes(): Observable<any> {
    this.messageService.add("HeroService: fetched heroes");
    return this.http
      .get(this.BASE_URL + this.HEROES_URL)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    //To know the version of RxJS npm list --depth=0
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred: ", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}` + ` body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return _throw("Something bad happened; please try again later.");
  }
}
