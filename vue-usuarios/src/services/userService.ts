import type {User} from '../types/user';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export async function getUsers(): Promise<User[]> {

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Error al consultar los usuarios');
  }

  return await response.json() as User[];
  
}