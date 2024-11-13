import { CardGetAllParams } from './card.get-params';
import { Card } from './card.schema';

export interface CardRepository {
  getAll(query: CardGetAllParams): Promise<Card[]>;
  create(payload: Partial<Card>): Promise<void>;
}