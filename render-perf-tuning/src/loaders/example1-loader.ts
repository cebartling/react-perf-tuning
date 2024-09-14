import { Person } from '../schemas';

export type Example1LoaderData = { person: Person };

export async function example1Loader(): Promise<Example1LoaderData> {
  const response = await fetch('/api/v1/people/1');
  if (!response.ok) {
    throw new Error('Failed to fetch person');
  }
  const person = await response.json();
  return { person };
}
