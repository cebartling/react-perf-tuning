import { Person } from '../schemas';

export type Example1LoaderData = { person: Person };

export async function example1Loader(): Promise<Example1LoaderData> {
  const person: Person = { id: crypto.randomUUID(), name: 'John Doe', age: 25 };
  return { person };
}
