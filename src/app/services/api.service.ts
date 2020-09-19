import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public url: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public getPartidos() {
    return this.httpClient.get(this.url + "partidos");
  }
}
