import { fetchCategories, fetchAllProducts } from '../src/api/apiService';
import { mockResolvedValue } from 'node-fetch'; 

// Mock 'node-fetch' to simulate API responses
jest.mock('node-fetch');

describe('API Functions', () => {
  it('fetchCategories should return data on success', async () => {
    const mockResponse = {
      ok: true,
      json: async () => (["Home Store", "Health & Nutrition","Clothes",
      "Sports Fan Shop","Shoes","Beauty","Garden","Business","Electronics","Party Supplies",
      "Auto","Computers","Sports and Fitness","Toys","Tools","Jewelry",
      "Food and Drink","Crafts",'Pet Supplies',"Travel","Music","Cameras",
      "Baby","Movies","Collectibles",'Video Games','Posters',"Books","Software"]),
    };
    mockResolvedValue(mockResponse);

    const result = await fetchCategories();

    expect(result).toEqual(["Home Store", "Health & Nutrition","Clothes",
      "Sports Fan Shop","Shoes","Beauty","Garden","Business","Electronics","Party Supplies",
      "Auto","Computers","Sports and Fitness","Toys","Tools","Jewelry",
      "Food and Drink","Crafts","Pet Supplies","Travel","Music","Cameras",
      "Baby","Movies","Collectibles","Video Games","Posters","Books","Software"]);
    });
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
      json: async () => (["Isotonix OPC-3®", "Isotonix® Daily Essentials Packets", "Ultimate Aloe™", 
      "Isotonix® Digestive Enzymes with Probiotics (Packets)", "Isotonix® Digestive Enzymes with Probiotics", 
      "Heart Health™ Essential Omega III Fish Oil with Vitamin E", "Isotonix® Calcium Plus", "Isotonix® Vitamin D with K2", 
      "Isotonix® Activated B Complex", "Probiotics-10", "Isotonix® Multivitamin With Iron", 
      "Heart Health™ Advanced Co-Q10 (Cardiovascular & Immune Support)", "MochaTonix® Single Canister", 
      "Isotonix&reg; Vitamin C", "Isotonix® Magnesium"])
    };
    mockResolvedValue(mockResponse);

    const result = await fetchAllProducts();

    expect(result).toEqual(["Isotonix OPC-3®", "Isotonix® Daily Essentials Packets", "Ultimate Aloe™", 
    "Isotonix® Digestive Enzymes with Probiotics (Packets)", "Isotonix® Digestive Enzymes with Probiotics", 
    "Heart Health™ Essential Omega III Fish Oil with Vitamin E", "Isotonix® Calcium Plus", "Isotonix® Vitamin D with K2", 
    "Isotonix® Activated B Complex", "Probiotics-10", "Isotonix® Multivitamin With Iron", 
    "Heart Health™ Advanced Co-Q10 (Cardiovascular & Immune Support)", "MochaTonix® Single Canister", 
    "Isotonix&reg; Vitamin C", "Isotonix® Magnesium"]);
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
