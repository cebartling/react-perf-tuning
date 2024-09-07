import { z } from 'zod';
import { EducationSchema } from './education.ts';
import { ExperienceSchema } from './experience.ts';
import { CertificationSchema } from './certification.ts';

export const PersonSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
  education: z.array(EducationSchema).optional(),
  experience: z.array(ExperienceSchema).optional(),
  certifications: z.array(CertificationSchema).optional(),
});

export type Person = z.infer<typeof PersonSchema>;
