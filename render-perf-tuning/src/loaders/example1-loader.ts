import { Person } from '../schemas';

export type Example1LoaderData = { person: Person };

export async function example1Loader(): Promise<Example1LoaderData> {
  const person: Person = {
    id: crypto.randomUUID(),
    version: 1,
    first_name: 'John',
    last_name: 'Doe',
    age: 25,
  };
  return { person };
}
