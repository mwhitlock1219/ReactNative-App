import { fetchCategories, fetchAllProducts } from '../src/api/apiService';
import { mockResolvedValue } from 'node-fetch'; 

// Mock 'node-fetch' to simulate API responses
jest.mock('node-fetch');

describe('API Functions', () => {
  it('fetchCategories should return data on success', async () => {
    const mockResponse = {
      ok: true,
      json: async () => ({ data: 'categories data' }),
    };
    mockResolvedValue(mockResponse);

    const result = await fetchCategories();

    expect(result).toEqual({ data: 'categories data' });
  });

  it('fetchCategories should throw an error on failure', async () => {
    const mockResponse = {
      ok: false,
      status: 500,
    };
    mockResolvedValue(mockResponse);

    try {
      await fetchCategories();
    } catch (error) {
      expect(error.message).toBe('HTTP error! Status: 500');
    }
  });

  it('fetchAllProducts should return data on success', async () => {
    const mockResponse = {
      ok: true,
      json: async () => ({ data: 'products data' }),
    };
    mockResolvedValue(mockResponse);

    const result = await fetchAllProducts();

    expect(result).toEqual({ data: 'products data' });
  });

  it('fetchAllProducts should throw an error on failure', async () => {
    const mockResponse = {
      ok: false,
      status: 404,
    };
    mockResolvedValue(mockResponse);

    try {
      await fetchAllProducts();
    } catch (error) {
      expect(error.message).toBe('HTTP error! Status: 404');
    }
  });
});
