import { PlanetAxiosRepository } from "./planet.axios.repository";
import { PlanetUseCase } from "../application/planet.use-case";

class PlanetService {
  planetUseCase: PlanetUseCase;

  constructor () {
    this.planetUseCase = new PlanetUseCase(new PlanetAxiosRepository());
  }

  async getAllPlanets () {
    return await this.planetUseCase.getAllPlanets();
  }
}

export const planetService = new PlanetService();