export const API_BASE_URL = 'https://api.example.com';

export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
};