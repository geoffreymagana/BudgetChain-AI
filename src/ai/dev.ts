import { config } from 'dotenv';
config();

import '@/ai/flows/determine-registration-eligibility.ts';
import '@/ai/flows/generate-portfolio-insights.ts';
import '@/ai/flows/get-wallet-registration-decision.ts';
import '@/ai/flows/generate-detailed-portfolio-report.ts';
