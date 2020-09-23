import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public url: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public getPartidos(): Observable<any> {
    return this.httpClient.get(this.url + "partidos");
  }

  public getMembrosDoPartido(idPartido: number): Observable<any> {
    return this.httpClient.get(this.url + "partidos/" + idPartido + "/membros");
  }
}
