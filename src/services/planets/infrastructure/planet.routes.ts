import { Router } from 'express';
import { planetController } from './planet.controller';

export const createPlanetRoutes = () => {
  const router = Router();

  router.get('/', planetController.getAllPlanets);

  return router;
};
