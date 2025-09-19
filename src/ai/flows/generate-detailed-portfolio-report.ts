// This file defines a Genkit flow for generating a detailed portfolio report.

'use server';

/**
 * @fileOverview Generates a detailed, well-structured portfolio analysis report using AI.
 *
 * - generateDetailedPortfolioReport - A function that generates a detailed portfolio report.
 * - GenerateDetailedPortfolioReportInput - The input type for the generateDetailedPortfolioReport function.
 * - GenerateDetailedPortfolioReportOutput - The return type for the generateDetailedPortfolioReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDetailedPortfolioReportInputSchema = z.object({
  portfolioData: z.string().describe('The user portfolio data in JSON format including token allocations, chain balances, and transaction history.'),
  investmentGoals: z.string().describe('The user specified investment goals.'),
});
export type GenerateDetailedPortfolioReportInput = z.infer<typeof GenerateDetailedPortfolioReportInputSchema>;

const GenerateDetailedPortfolioReportOutputSchema = z.object({
  report: z.string().describe('A detailed, well-structured portfolio analysis report in Markdown format. It should include sections for Performance Overview, Asset Allocation, Risk Analysis, Opportunities, and links to relevant educational articles.'),
});
export type GenerateDetailedPortfolioReportOutput = z.infer<typeof GenerateDetailedPortfolioReportOutputSchema>;

export async function generateDetailedPortfolioReport(input: GenerateDetailedPortfolioReportInput): Promise<GenerateDetailedPortfolioReportOutput> {
  return generateDetailedPortfolioReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDetailedPortfolioReportPrompt',
  input: {schema: GenerateDetailedPortfolioReportInputSchema},
  output: {schema: GenerateDetailedPortfolioReportOutputSchema},
  prompt: `You are a sophisticated AI financial analyst. Your task is to generate a detailed, well-structured portfolio report in Markdown format based on the provided data.

The report should be professional, insightful, and easy to understand.

**Portfolio Data:**
{{{portfolioData}}}

**User's Investment Goals:**
"{{investmentGoals}}"

**Report Structure:**

### 1. Executive Summary
- Brief overview of portfolio performance and key takeaways.

### 2. Performance Overview
- Analyze overall performance against the user's goals.
- Highlight best and worst-performing assets.

### 3. Asset Allocation Analysis
- Review the current distribution of assets.
- Comment on diversification and concentration. Is it aligned with the user's risk tolerance?

### 4. Risk Analysis
- Identify key risks (e.g., high concentration, exposure to volatile assets).
- Provide a risk score or category (e.g., Low, Medium, High).

### 5. AI-Driven Opportunities & Recommendations
- Suggest concrete, actionable steps to optimize the portfolio. Examples:
  - "Consider rebalancing by taking profits from [Asset A] and reallocating to [Asset B] to improve diversification."
  - "Explore staking your [Asset C] on [Platform X] to earn an estimated APY of [Y]%."
  - "To save on transaction fees, consider using a Layer 2 solution like Polygon for smaller trades."

### 6. Further Reading & Resources
- Provide at least 2-3 links to high-quality, relevant articles (e.g., from reputable sources like CoinDesk, Decrypt, Bankless) that can help the user understand the concepts discussed in the report. For example, if you mention staking, link to an article explaining "What is Staking?".

Generate the full report in a single Markdown block.
  `,
});

const generateDetailedPortfolioReportFlow = ai.defineFlow(
  {
    name: 'generateDetailedPortfolioReportFlow',
    inputSchema: GenerateDetailedPortfolioReportInputSchema,
    outputSchema: GenerateDetailedPortfolioReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
