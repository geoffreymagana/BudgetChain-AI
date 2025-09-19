// This file determines if a wallet registration should proceed based on market conditions, gas prices, and registration volume using AI.

'use server';

/**
 * @fileOverview Determines the best time to register a wallet based on market conditions, gas prices, and registration volume.
 *
 * - getWalletRegistrationDecision - A function that determines the best time to register a wallet.
 * - GetWalletRegistrationDecisionInput - The input type for the getWalletRegistrationDecision function.
 * - GetWalletRegistrationDecisionOutput - The return type for the getWalletRegistrationDecision function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetWalletRegistrationDecisionInputSchema = z.object({
  marketConditions: z.string().describe('The current market conditions, including volatility and trading volume.'),
  gasPrices: z.string().describe('Current gas prices on the network.'),
  registrationVolume: z.string().describe('The current volume of wallet registrations.'),
});
export type GetWalletRegistrationDecisionInput = z.infer<typeof GetWalletRegistrationDecisionInputSchema>;

const GetWalletRegistrationDecisionOutputSchema = z.object({
  shouldRegister: z
    .boolean()
    .describe('Whether the wallet should be registered based on the inputs.'),
  reason: z
    .string()
    .describe(
      'The AI reason, based on the inputs, that justifies the registration decision.'
    ),
});
export type GetWalletRegistrationDecisionOutput = z.infer<typeof GetWalletRegistrationDecisionOutputSchema>;

export async function getWalletRegistrationDecision(input: GetWalletRegistrationDecisionInput): Promise<GetWalletRegistrationDecisionOutput> {
  return getWalletRegistrationDecisionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getWalletRegistrationDecisionPrompt',
  input: {schema: GetWalletRegistrationDecisionInputSchema},
  output: {schema: GetWalletRegistrationDecisionOutputSchema},
  prompt: `You are an AI assistant that determines whether a user should register their wallet based on current market conditions, gas prices, and registration volume.

  Based on the provided information, decide whether it is a good time for the user to register their wallet.

  Consider factors such as network congestion, gas prices, and overall market sentiment.

  Market Conditions: {{{marketConditions}}}
  Gas Prices: {{{gasPrices}}}
  Registration Volume: {{{registrationVolume}}}
  `,
});

const getWalletRegistrationDecisionFlow = ai.defineFlow(
  {
    name: 'getWalletRegistrationDecisionFlow',
    inputSchema: GetWalletRegistrationDecisionInputSchema,
    outputSchema: GetWalletRegistrationDecisionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
