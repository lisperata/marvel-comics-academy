import { AxiosResponse } from 'axios';
import { Nullable, ResponseComics } from '../types/types';
import ComicsApiError from '../components/apiErrors/ComicsApiError';
import instance from './axiosInstance';

const getComics = async (
  id: Nullable<number>,
  limit: Nullable<number>,
  offset: Nullable<number>,
): Promise<ResponseComics> => {
  try {
    const response: AxiosResponse<ResponseComics> = await instance.get(`/v1/public/characters/${id}/comics`, {
      params: {
        limit: limit,
        offset: offset,
        orderBy: '-modified',
      },
    });
    return response.data;
  } catch (error) {
    throw new ComicsApiError('Connection problems...');
  }
};

export default getComics;
