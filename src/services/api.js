import axios from 'axios';

const client = axios.create({
  baseURL: 'https://666acd4b7013419182d0f9ae.mockapi.io/api',
  json: true,
});

export const fetchContacts = async () => {
  const response = await client.get('/contacts');
  return response.data;
};

export const addContact = async contact => {
  const response = await client.post('/contacts', contact);
  return response.data;
};

export const deleteContact = async id => {
  const response = await client.delete(`/contacts/${id}`);
  return response.data;
};
