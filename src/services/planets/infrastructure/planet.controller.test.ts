import { Request, Response, NextFunction } from 'express';
import { PlanetController } from './planet.controller';
import { planetService } from './planet.service';
import { PLANETS_MOCK_DATA } from '../../../shared/mock/planet-mock-data';

describe('PlanetController', () => {
  let planetController: PlanetController;
  let req: Request;
  let res: Response;
  let next: NextFunction;

  const mockPlanetService = {
    getAllPlanets: jest.fn(),
  };

  beforeEach(() => {
    planetController = new PlanetController();
    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    next = jest.fn() as NextFunction;

    jest
      .spyOn(planetService, 'getAllPlanets')
      .mockImplementation(mockPlanetService.getAllPlanets);
  });

  describe('getAllPlanets', () => {
    test('should return status 200 and data', async () => {
      const planetData = PLANETS_MOCK_DATA;
      (planetService.getAllPlanets as jest.Mock).mockResolvedValue(
        planetData
      );

      await planetController.getAllPlanets(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        ok: true,
        data: planetData,
        error: null,
      });
    });

    test('should call next with error if service throws an error', async () => {
      const error = new Error('Test error');
      (planetService.getAllPlanets as jest.Mock).mockRejectedValue(
        error
      );

      await planetController.getAllPlanets(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
