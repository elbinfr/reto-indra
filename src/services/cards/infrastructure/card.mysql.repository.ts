import { knex } from '../../../db/mysql-connection';
import { CardGetAllParams } from '../domain/card.get-params';
import { CardRepository } from '../domain/card.repository';
import { Card } from '../domain/card.schema';

export class CardMysqlRepository implements CardRepository {
  async getAll(queryParams: CardGetAllParams): Promise<Card[]> {
    const cards = await knex.select('*')
      .from('cards')
      .where((queryDb: any) => {
        if (queryParams?.search) {
          queryDb.where('owner', 'like', `%${queryParams?.search}%`);
        }

        if (queryParams?.expirationYear) {
          queryDb.where('expiration_year', queryParams?.expirationYear);
        }
      });

    return cards;
  }

  async create(payload: Partial<Card>): Promise<void> {
    await knex('cards').insert({
      owner: payload.owner,
      card_number: payload.card_number,
      cvv: payload.cvv,
      expiration_month: payload.expiration_month,
      expiration_year: payload.expiration_year
    });
  }
  
}