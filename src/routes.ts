import { Router } from 'express';
import { createCardRoutes } from './services/cards/infrastructure/card.routes';
import { createPlanetRoutes } from './services/planets/infrastructure/planet.routes';

export const publicRoutes = () => {
  const publicRouter = Router();

  publicRouter.use('/cards', createCardRoutes());
  publicRouter.use('/planets', createPlanetRoutes());

  return publicRouter;
};

