const API_KEY = import.meta.env.VITE_CONFIG_API_KEY;
const BASE_URL = import.meta.env.VITE_CONFIG_BASE_URL;

export const fetchHeroId = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${API_KEY}/${id}`);

    if (!response.ok) {
      throw new Error(`Error fetching hero: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
