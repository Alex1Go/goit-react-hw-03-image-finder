import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38225262-d1745fccc0f8e035d7be8e954';

export const fetchImages = async (querry, page) => {
  const response = await axios.get(`/?q=${querry}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
  return response.data;
};