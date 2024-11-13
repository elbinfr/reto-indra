import { z } from 'zod';

export interface Card {
  id: number;
  owner: string;
  card_number: string;
  cvv: string;
  expiration_month: number;
	expiration_year: number;
}

const current = new Date();
const currentYear = current.getFullYear();
const maxYear = currentYear + 5;

export const cardSchema = z.object({
  owner: z.string({ required_error: 'Nombre de propietario de tarjeta es requerido' }),
  card_number: z.string({ required_error: 'Número de tarjeta es requerido' }),
  cvv: z.string({ required_error: 'Código cvv es requerido' }),
  expiration_month: z
    .number({ 
      required_error: 'Mes de vencimiento es requerido',
      invalid_type_error: 'Mes de vencimiento debe ser un número' 
    })
    .gte(1, { message: `Mes debe ser mayor o igual a 1`})
    .lte(12, {message: `Mes debe ser menor o igual a 12`}),
  expiration_year: z
    .number({ 
      required_error: 'Año de vencimiento es requerido',
      invalid_type_error: 'Año de vencimiento debe ser un número' 
    })
    .gte(currentYear, { message: `Año debe ser mayor o igual al año actual ${currentYear}`})
    .lte(maxYear, {message: `Año debe ser menor o igual a ${maxYear}`})
});

export const validateCardInput = (body: any) => {
  return cardSchema.parseAsync(body);
};

export const validatePartialCardInput = (body: any) => {
  return cardSchema.partial().parseAsync(body);
};