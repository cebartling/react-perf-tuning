import { http, HttpResponse, passthrough } from 'msw';
import { Person } from '../schemas';

const person: Person = {
  id: crypto.randomUUID(),
  version: 1,
  firstName: 'John',
  lastName: 'Doe',
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

export const handlers = [
  http.get('/api/v1/people/:id', ({ params }) => {
    console.log(`Handling GET /api/v1/people/${params.id}`);
    return HttpResponse.json(person);
  }),
  http.get('*.svg', () => {
    return passthrough();
  }),
];
