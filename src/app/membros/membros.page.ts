import { ApiService } from "./../services/api.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-membros",
  templateUrl: "./membros.page.html",
  styleUrls: ["./membros.page.scss"],
})
export class MembrosPage implements OnInit {
  idPartido: number;
  membros: Array<any> = [];
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.idPartido = this.route.snapshot.params.id;
    this.buscarMembrosDoPartido();
  }

  buscarMembrosDoPartido(): void {
    this.apiService
      .getMembrosDoPartido(this.idPartido)
      .subscribe((response) => {
        this.membros = response.dados;
      });
  }
}
