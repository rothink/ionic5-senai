import { Comida } from "./../models/comida";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class ComidaService {
  constructor(public storage: Storage) {}

  public async salvarComida(comida: Comida, id: number): Promise<void> {
    if (id || id === 0) {
      await this.update(comida, id);
      return;
    }
    await this.save(comida);
  }

  /**
   * 1 - Pizza
   * 2 - Macarrão
   * 3 - Batata
   */
  public async update(comidaForm: Comida, id: number): Promise<void> {
    //comidaForm={Ovos} | id={2}
    const comidas = await this.getAll();
    const comidasAtualizadas = await comidas.map((comidalocalStorage, key) => {
      if (id === key) {
        return comidaForm;
      }
      return comidalocalStorage;
    });

    // ComidasAtualizadas = [1 - pizza, 2 - ovos, 3 - batata]
    await this.storage.set("comidas", JSON.stringify(comidasAtualizadas));
  }

  public async save(comida: Comida): Promise<void> {
    let comidas = await this.getAll();
    if (!comidas) {
      comidas = [];
    }
    comidas.push(comida);
    await this.storage.set("comidas", JSON.stringify(comidas));
  }
  public async getAll(): Promise<Comida[]> {
    let comidas = await this.storage.get("comidas");
    comidas = JSON.parse(comidas);
    return comidas;
  }
  public async removeAll(): Promise<void> {
    await this.storage.remove("comidas");
  }

  public async remove(index: number): Promise<void> {
    let comidas = await this.getAll();
    comidas.splice(index, 1);
    await this.storage.set("comidas", JSON.stringify(comidas));
  }

  public async find(index: number): Promise<Comida> {
    const comidas = await this.getAll();
    const comidaProcurada = comidas.find((comida, key) => {
      if (index === key) {
        return comida;
      }
    });
    return comidaProcurada;
  }
}
