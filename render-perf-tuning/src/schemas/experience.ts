import { z } from 'zod';

export const ExperienceSchema = z.object({
  id: z.string(),
  companyName: z.string(),
  position: z.string(),
  description: z.string(),
  yearStarted: z.number(),
  monthStarted: z.number(),
  yearEnded: z.number().optional(),
  monthEnded: z.number().optional(),
});

export type Experience = z.infer<typeof ExperienceSchema>;
