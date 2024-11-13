import { NextFunction, Request, Response } from 'express';
import { planetService } from './planet.service';

export class PlanetController {
  getAllPlanets = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await planetService.getAllPlanets();

      res.status(200).json({
        ok: true,
        data: data,
        error: null,
      });
    } catch (error) {
      next(error);
    }
  };
}

export const planetController = new PlanetController();