import { Person } from '../schemas';

export type Example1LoaderData = { person: Person };

export async function example1Loader(): Promise<Example1LoaderData> {
  const person: Person = {
    id: crypto.randomUUID(),
    version: 1,
    first_name: 'John',
    last_name: 'Doe',
    age: 25,
    education: [
      {
        id: crypto.randomUUID(),
        version: 1,
        degree: 'High School',
        schoolName: 'Rochester Mayo High School',
        yearGraduated: 2001,
        yearStarted: 1997,
      },
      {
        id: crypto.randomUUID(),
        version: 1,
        degree: 'Bachelor',
        schoolName: 'University of Wisconsin - Madison',
        yearGraduated: 2005,
        yearStarted: 2001,
      },
      {
        id: crypto.randomUUID(),
        version: 1,
        degree: 'Master',
        schoolName: 'University of Minnesota - Twin Cities',
        yearStarted: 2006,
        yearGraduated: 2008,
      },
    ],
  };
  return { person };
}
