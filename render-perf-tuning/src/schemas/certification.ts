import { z } from 'zod';

export const CertificationSchema = z.object({
  id: z.string(),
  version: z.number().gte(1),
  name: z.string(),
  yearEarned: z.number(),
  monthEarned: z.number(),
  yearExpires: z.number().optional(),
  monthExpires: z.number().optional(),
});

export type Certification = z.infer<typeof CertificationSchema>;
