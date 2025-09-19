// This file determines if a wallet registration request is likely to succeed using AI.

'use server';

/**
 * @fileOverview Determines the eligibility of a wallet registration request using AI.
 *
 * - determineRegistrationEligibility - A function that determines the eligibility of a wallet registration request.
 * - DetermineRegistrationEligibilityInput - The input type for the determineRegistrationEligibility function.
 * - DetermineRegistrationEligibilityOutput - The return type for the determineRegistrationEligibility function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DetermineRegistrationEligibilityInputSchema = z.object({
  walletAddress: z.string().describe('The address of the wallet to register.'),
  chainId: z.string().describe('The ID of the blockchain chain.'),
  registrationRequestDetails: z
    .string()
    .describe(
      'Details about the registration request, including gas price, nonce, and any other relevant transaction parameters.'
    ),
});
export type DetermineRegistrationEligibilityInput = z.infer<
  typeof DetermineRegistrationEligibilityInputSchema
>;

const DetermineRegistrationEligibilityOutputSchema = z.object({
  isEligible: z
    .boolean()
    .describe(
      'Whether the wallet registration request is likely to complete successfully.'
    ),
  reason: z
    .string()
    .describe(
      'The AI reason, based on the inputs, that justifies the eligibility determination.'
    ),
});
export type DetermineRegistrationEligibilityOutput = z.infer<
  typeof DetermineRegistrationEligibilityOutputSchema
>;

export async function determineRegistrationEligibility(
  input: DetermineRegistrationEligibilityInput
): Promise<DetermineRegistrationEligibilityOutput> {
  return determineRegistrationEligibilityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'determineRegistrationEligibilityPrompt',
  input: {schema: DetermineRegistrationEligibilityInputSchema},
  output: {schema: DetermineRegistrationEligibilityOutputSchema},
  prompt: `You are an AI assistant that determines the eligibility of a wallet registration request on a blockchain.

  Based on the wallet address, chain ID, and registration request details, determine if the registration request is likely to complete successfully.

  Consider factors such as gas price, network congestion, and the validity of the transaction parameters.

  Wallet Address: {{{walletAddress}}}
  Chain ID: {{{chainId}}}
  Registration Request Details: {{{registrationRequestDetails}}}

  Respond with a JSON object indicating whether the request is eligible and the rationale behind the decision.
  `,
});

const determineRegistrationEligibilityFlow = ai.defineFlow(
  {
    name: 'determineRegistrationEligibilityFlow',
    inputSchema: DetermineRegistrationEligibilityInputSchema,
    outputSchema: DetermineRegistrationEligibilityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
