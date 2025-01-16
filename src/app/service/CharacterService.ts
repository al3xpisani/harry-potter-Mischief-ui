import { Character, Characters } from '@/app/types/character';
import { apiRequest } from './ApiRequest';

const basePathApiCharacters = 'api/characters';

export const getCharacterById = async (id: string): Promise<Character> => {
  return apiRequest(`${basePathApiCharacters}/${encodeURIComponent(id)}`);
};

export const getCharactersByCastType = async (id: string): Promise<Characters> => {
  return apiRequest(`${basePathApiCharacters}/${encodeURIComponent(id)}`);
};
