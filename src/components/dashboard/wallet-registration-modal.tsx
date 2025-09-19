'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet } from "@/lib/types";
import { checkRegistrationEligibility } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

type WalletRegistrationModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  wallet: Wallet;
};

export function WalletRegistrationModal({ isOpen, setIsOpen, wallet }: WalletRegistrationModalProps) {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [eligibilityResult, setEligibilityResult] = useState<{isEligible: boolean, reason: string} | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setEligibilityResult(null);

        const formData = new FormData(event.currentTarget);
        const result = await checkRegistrationEligibility(formData);
        
        setIsLoading(false);

        if (result.success && 'isEligible' in result) {
            setEligibilityResult({ isEligible: result.isEligible, reason: result.reason });
            toast({
                title: result.isEligible ? "Eligibility Check Passed" : "Eligibility Check Failed",
                description: result.reason,
                variant: result.isEligible ? "default" : "destructive",
            });
        } else {
            toast({
                title: "Error",
                description: result.error || "Failed to check eligibility.",
                variant: "destructive",
            });
        }
    }


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register Wallet</DialogTitle>
          <DialogDescription>
            Create an on-chain record of ownership for your wallet. Our AI will first check if the registration is likely to succeed.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="walletAddress" value={wallet.address} />
            <input type="hidden" name="chainId" value={wallet.chain.id} />

            <div className="grid gap-4 py-4">
                <div className="flex flex-col space-y-1.5">
                    <p className="text-sm text-muted-foreground">Wallet</p>
                    <p className="font-semibold">{wallet.name}</p>
                    <p className="text-sm text-muted-foreground">{wallet.shortAddress}</p>
                </div>
                <div className="flex flex-col space-y-1.5">
                    <p className="text-sm text-muted-foreground">Chain</p>
                    <p className="font-semibold">{wallet.chain.name}</p>
                </div>
                {eligibilityResult && (
                    <Alert variant={eligibilityResult.isEligible ? "default" : "destructive"}>
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>{eligibilityResult.isEligible ? "Eligible for Registration" : "Not Eligible"}</AlertTitle>
                        <AlertDescription>
                            {eligibilityResult.reason}
                        </AlertDescription>
                    </Alert>
                )}
            </div>

            <DialogFooter>
            {eligibilityResult?.isEligible ? (
                <Button type="button" className="w-full bg-accent hover:bg-accent/90">Sign & Register</Button>
            ) : (
                <Button type="submit" disabled={isLoading || (eligibilityResult != null && !eligibilityResult.isEligible)} className="w-full">
                    {isLoading ? "Checking..." : "Check Registration Eligibility"}
                </Button>
            )}
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
