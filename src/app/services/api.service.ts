import { ResponseApiDeputado } from "./../models/response-api-deputado";
import { ResponseApi } from "./../models/response-api";
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

  public getPartidos(): Observable<ResponseApi> {
    return this.httpClient.get<ResponseApi>(this.url + "partidos");
  }

  public getMembrosDoPartido(idPartido: number): Observable<any> {
    return this.httpClient.get<ResponseApi>(
      this.url + "partidos/" + idPartido + "/membros"
    );
  }

  public getDeputadoById(id: number): Observable<ResponseApiDeputado> {
    return this.httpClient.get<ResponseApiDeputado>(
      this.url + "deputados/" + id
    );
  }
}
