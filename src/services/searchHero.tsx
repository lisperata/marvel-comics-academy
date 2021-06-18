import { AxiosResponse } from 'axios';
import { Nullable, ResponseHero } from '../types/types';
import HeroApiError from '../components/apiErrors/HeroApiError';
import instance from './axiosInstance';

const getHero = async (
  nameStartsWith: Nullable<string>,
  limit: Nullable<string>,
  orderBy: string,
  offset: number,
): Promise<ResponseHero> => {
  try {
    const response: AxiosResponse<ResponseHero> = await instance.get('/v1/public/characters', {
      params: {
        nameStartsWith: nameStartsWith,
        limit: limit,
        orderBy: orderBy,
        offset: offset,
      },
    });
    return response.data;
  } catch (error) {
    throw new HeroApiError('Connection problems...');
  }
};
export default getHero;
