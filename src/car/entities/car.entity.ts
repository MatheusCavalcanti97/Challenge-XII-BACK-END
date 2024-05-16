export class Car {
  private id?: string;
  private modelCar: string;

  constructor(id?: string, modelCar?: string) {
    this.id = id;
    this.modelCar = modelCar;
  }

  get getId() {
    return this.getId;
  }

  get getModelCar() {
    return this.modelCar;
  }

  set setId(modelCar: string) {
    this.modelCar = modelCar;
  }
}
