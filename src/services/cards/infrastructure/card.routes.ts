import { Router } from 'express';
import { cardController } from './card.controller';

export const createCardRoutes = () => {
  const router = Router();

  router.get('/', cardController.getAll);
  router.post('/', cardController.create);

  return router;
}