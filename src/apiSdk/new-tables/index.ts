import queryString from 'query-string';
import { NewTableInterface, NewTableGetQueryInterface } from 'interfaces/new-table';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNewTables = async (
  query?: NewTableGetQueryInterface,
): Promise<PaginatedInterface<NewTableInterface>> => {
  return fetcher('/api/new-tables', {}, query);
};

export const createNewTable = async (newTable: NewTableInterface) => {
  return fetcher('/api/new-tables', { method: 'POST', body: JSON.stringify(newTable) });
};

export const updateNewTableById = async (id: string, newTable: NewTableInterface) => {
  return fetcher(`/api/new-tables/${id}`, { method: 'PUT', body: JSON.stringify(newTable) });
};

export const getNewTableById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/new-tables/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteNewTableById = async (id: string) => {
  return fetcher(`/api/new-tables/${id}`, { method: 'DELETE' });
};
