import { cn } from "@/lib/utils";

export function AppLogo({ className }: { className?: string }) {
  return (
    <img src='/images/icons/logo/BudgetChainAI.png' className={cn("h-8 w-auto", className)} alt="BudgetChain AI Logo" />
  );
}
