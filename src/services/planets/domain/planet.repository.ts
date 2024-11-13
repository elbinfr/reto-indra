export interface PlanetRepository {
  getAttributes(): Promise<any>;
  getAllPlanets(): Promise<any>;
}