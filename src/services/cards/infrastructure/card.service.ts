 import { CardMysqlRepository } from "./card.mysql.repository";
 import { CardUseCase } from "../application/card.use-case";

 export class CardService {
  private cardUseCase: CardUseCase;

  constructor () {
    this.cardUseCase = new CardUseCase(new CardMysqlRepository);
  }

  async getAll(query: any) {
    return await this.cardUseCase.getAll(query);
  }

  async create(payload: any) {
    return await this.cardUseCase.create(payload);
  }

 }