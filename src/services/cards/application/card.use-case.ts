import { CardRepository } from "../domain/card.repository";

export class CardUseCase {

  constructor (private cardRepository: CardRepository) {}

  async getAll(query: any) {
    try {
      const users = await this.cardRepository.getAll(query);

      return users;
    } catch (error) {
      throw new Error('Error obteniendo tarjetas');
    }
  }

  async create(data: any) {
    try {
      const newUser = this.cardRepository.create(data);

      return newUser;
    } catch (error) {
      throw new Error('Error registrando tarjeta');
    }
  }
}