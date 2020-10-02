import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ComidaService {
  constructor(private storage: Storage) {
    storage.set("comidas", JSON.stringify([{ nome: "comida" }]));
    // Or to get a key/value pair
  }

  public getAll() {
    return this.storage.get("comidas").then((comidas) => {
      if (!comidas) {
        return Promise.resolve([]);
      }
      if (!comidas.isArray) {
        return Promise.resolve([]);
      }
      return Promise.resolve(comidas);
    });
  }

  public salvarComida(comida) {
    this.getAll().then((comidas) => {
      comidas.push(comida);
      this.storage.set("comidas", comidas);
    });
  }
}
