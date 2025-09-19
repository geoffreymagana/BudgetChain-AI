'use server';

/**
 * @fileOverview Generates AI-driven insights for a user's cryptocurrency portfolio based on a specific query.
 *
 * - generatePortfolioInsights - A function that generates portfolio insights.
 * - GeneratePortfolioInsightsInput - The input type for the generatePortfolioInsights function.
 * - GeneratePortfolioInsightsOutput - The return type for the generatePortfolioInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioInsightsInputSchema = z.object({
  portfolioData: z.string().describe('The user portfolio data in JSON format including token allocations, chain balances, and transaction history.'),
  investmentGoals: z.string().describe('The user specified investment goals.'),
  userQuery: z.string().describe("The user's specific question about their portfolio."),
});
export type GeneratePortfolioInsightsInput = z.infer<typeof GeneratePortfolioInsightsInputSchema>;

const GeneratePortfolioInsightsOutputSchema = z.object({
  insights: z.string().describe('AI-generated insights and tips about the user portfolio, directly answering the user query. The response should be concise, helpful, and in Markdown format.'),
});
export type GeneratePortfolioInsightsOutput = z.infer<typeof GeneratePortfolioInsightsOutputSchema>;

export async function generatePortfolioInsights(input: GeneratePortfolioInsightsInput): Promise<GeneratePortfolioInsightsOutput> {
  return generatePortfolioInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioInsightsPrompt',
  input: {schema: GeneratePortfolioInsightsInputSchema},
  output: {schema: GeneratePortfolioInsightsOutputSchema},
  prompt: `You are an expert AI financial analyst for cryptocurrency portfolios.

  Your task is to answer the user's specific question about their portfolio. Use the provided portfolio data and their stated investment goals to formulate a concise, helpful, and actionable response.

  **User's Question:**
  "{{userQuery}}"

  **Portfolio Data:**
  {{{portfolioData}}}

  **User's Investment Goals:**
  "{{investmentGoals}}"

  Based on all the information, provide a direct answer to the user's question. If you provide suggestions, make them concrete and actionable. For example, instead of "diversify your portfolio", suggest "consider rebalancing by taking some profits from your ETH position and exploring assets in the DeFi or gaming sectors to reduce concentration risk."
  `,
});

const generatePortfolioInsightsFlow = ai.defineFlow(
  {
    name: 'generatePortfolioInsightsFlow',
    inputSchema: GeneratePortfolioInsightsInputSchema,
    outputSchema: GeneratePortfolioInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
