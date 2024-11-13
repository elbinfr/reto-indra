import * as deepl from 'deepl-node';
import { translatePropertyName } from '../../../lib/change-property-names';
import { PlanetRepository } from '../domain/planet.repository';
import { Dictionary } from '../domain/dictionary.schema';
import { parseToJsonKey } from './helpers/stringHelper';
import { DEEPL_API_KEY } from '../../../shared/contants';

export class PlanetUseCase {
  constructor (private planetRepository: PlanetRepository) {}

  async getAllPlanets () {
    try {
      const translator = new deepl.Translator(DEEPL_API_KEY as string);
      const attributes = await this.planetRepository.getAttributes();
      if (attributes.length === 0) {
        throw new Error('no existen atributos');
      }
      let translatedList = await translator.translateText(attributes, null, 'es');
      let dictionary: Dictionary = {};
      attributes.forEach( (attribute: string, index: number) => {
        //dictionary[attribute] = parseToJsonKey(translatedList[index].text) as string;
        if (Array.isArray(translatedList)) {
          dictionary[attribute] = parseToJsonKey(translatedList[index].text) as string;
        } else {
          // Handle the case when translatedList is a single TextResult object
          dictionary[attribute] = parseToJsonKey(translatedList.text) as string;
        }
      });

      const data = await this.planetRepository.getAllPlanets();
      const mappedPlanets = data?.results?.map((c: Record<string, string>) =>
        translatePropertyName(c, dictionary)
      );

      return mappedPlanets;

    } catch (error) {
      throw new Error('Error obteniendo planetas');
    }
  }

}