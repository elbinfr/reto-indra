import { NextFunction, Request, Response } from 'express';
import { validateCardInput } from '../domain/card.schema';
import { CardService } from './card.service';

export class CardController {
  cardService: CardService;

  constructor (cardService: CardService) {
    this.cardService = cardService;
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.query;
      const cards = await this.cardService.getAll(query);

      return res.status(200).json({
        ok: true,
        error: null,
        data: cards,
      });
    } catch (error) {
      next(error);
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      const data = await validateCardInput(body);

      await this.cardService.create(data);

      return res.status(200).json({
        ok: true,
        error: null,
        data: 'Tarjeta registrada correctamente',
      });
    } catch (error) {
      next(error);
    }
  };
}

export const cardController = new CardController(new CardService());