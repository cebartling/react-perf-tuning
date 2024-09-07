import { z } from 'zod';

export const personSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
});

export type Person = z.infer<typeof personSchema>;
