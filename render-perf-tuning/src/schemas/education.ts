import { z } from 'zod';

export const EducationSchema = z.object({
  id: z.string(),
  version: z.number().gte(1),
  schoolName: z.string(),
  degree: z.enum(['High School', 'Associate', 'Bachelor', 'Master', 'Doctorate']),
  yearStarted: z.number(),
  yearGraduated: z.number().optional(),
});

export type Education = z.infer<typeof EducationSchema>;
