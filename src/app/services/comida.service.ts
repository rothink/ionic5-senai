import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class ComidaService {
  constructor(public storage: Storage) {}

  public async salvarComida(value) {
    let comidas = await this.getAll();
    if (!comidas) {
      comidas = [];
    }
    comidas.push(value);
    await this.storage.set("comidas", JSON.stringify(comidas));
  }
  public async getAll() {
    let comidas = await this.storage.get("comidas");
    comidas = JSON.parse(comidas);
    return comidas;
  }
  public async removeAll() {
    return await this.storage.remove("comidas");
  }

  public async remove(index: number) {
    let comidas = await this.getAll();
    comidas.splice(index, 1);
    await this.storage.set("comidas", JSON.stringify(comidas));
  }
}
