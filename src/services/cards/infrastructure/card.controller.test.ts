import { Request, Response, NextFunction } from 'express';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { Card } from '../domain/card.schema';
import { faker } from '@faker-js/faker';

describe('CardController', () => {
  let cardController: CardController;
  let req: Request;
  let res: Response;
  let next: NextFunction;

  const mockCardService = {
    getAll: jest.fn(),
    create: jest.fn(),
  } as unknown as CardService;

  beforeEach(() => {
    cardController = new CardController(mockCardService);
    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    next = jest.fn() as NextFunction;
  });

  describe('getAll', () => {
    test('should return status 200 and users array', async () => {
      const card1: Card = {
        id: faker.number.int(),
        owner: faker.person.fullName(),
        card_number: faker.finance.creditCardNumber(),
        cvv: faker.finance.creditCardCVV(),
        expiration_month: faker.number.int({ min: 1, max: 12 }),
        expiration_year: faker.number.int({ min: 2024, max: 2029 }),
      };
      const card2: Card = {
        id: faker.number.int(),
        owner: faker.person.fullName(),
        card_number: faker.finance.creditCardNumber(),
        cvv: faker.finance.creditCardCVV(),
        expiration_month: faker.number.int({ min: 1, max: 12 }),
        expiration_year: faker.number.int({ min: 2024, max: 2029 }),
      };

      (mockCardService.getAll as jest.Mock).mockResolvedValue([card1, card2]);

      await cardController.getAll(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        ok: true,
        error: null,
        data: [card1, card2],
      });
    });
  });

  describe('create', () => {
    test('should return status 200 and success message', async () => {
      const cardData = {
        owner: faker.person.fullName(),
        card_number: faker.finance.creditCardNumber(),
        cvv: faker.finance.creditCardCVV(),
        expiration_month: faker.number.int({ min: 1, max: 12 }),
        expiration_year: faker.number.int({ min: 2024, max: 2029 }),
      };

      (mockCardService.create as jest.Mock).mockResolvedValue(undefined);

      req.body = cardData;

      await cardController.create(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        ok: true,
        error: null,
        data: 'Tarjeta registrada correctamente',
      });
    });
  });

});