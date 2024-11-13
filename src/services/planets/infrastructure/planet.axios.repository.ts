import axios from 'axios';
import { SW_URL_API } from '../../../shared/contants';
import { PlanetRepository } from '../domain/planet.repository';

export class PlanetAxiosRepository implements PlanetRepository{
  swApi;

  constructor() {
    this.swApi = axios.create({
      baseURL: SW_URL_API,
    });
  }

  async getAllPlanets() {
    try {
      const res = await this.swApi.get('/planets');
      const data = res.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAttributes() {
    try {
      const res = await this.swApi.get('/planets/schema');
      const data = res.data.required;

      return data;
    } catch (error) {
      throw error;
    }
  }

}