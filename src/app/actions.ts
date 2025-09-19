'use server';

import { generatePortfolioInsights } from '@/ai/flows/generate-portfolio-insights';
import { determineRegistrationEligibility } from '@/ai/flows/determine-registration-eligibility';
import { generateDetailedPortfolioReport } from '@/ai/flows/generate-detailed-portfolio-report';
import { z } from 'zod';
import { portfolioForAI } from '@/lib/mock-data';

const insightsSchema = z.object({
  query: z.string(),
});

export async function getPortfolioInsights(formData: FormData) {
  try {
    const parsed = insightsSchema.safeParse({
      query: formData.get('query'),
    });

    if (!parsed.success) {
      return { success: false, error: 'Invalid input.' };
    }

    const result = await generatePortfolioInsights({
      ...portfolioForAI,
      userQuery: parsed.data.query,
    });
    return { success: true, insights: result.insights };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to generate insights.' };
  }
}

const registrationSchema = z.object({
  walletAddress: z.string(),
  chainId: z.string(),
});

export async function checkRegistrationEligibility(formData: FormData) {
  try {
    const parsed = registrationSchema.safeParse({
      walletAddress: formData.get('walletAddress'),
      chainId: formData.get('chainId'),
    });

    if (!parsed.success) {
      return { success: false, error: 'Invalid input.' };
    }
    
    const result = await determineRegistrationEligibility({
        ...parsed.data,
        registrationRequestDetails: JSON.stringify({
            gasPrice: 'standard',
            nonce: 'auto',
            timestamp: new Date().toISOString(),
        })
    });

    return { success: true, ...result };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to check eligibility.' };
  }
}

export async function generateDetailedReport() {
  try {
    const result = await generateDetailedPortfolioReport(portfolioForAI);
    return { success: true, report: result.report };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to generate detailed report.' };
  }
}