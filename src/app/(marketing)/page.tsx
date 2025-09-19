import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              AI-Powered Clarity for Your Entire Crypto Portfolio
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect all your wallets from Ethereum, Solana, and beyond.
              BudgetChain AI unifies your assets into a single dashboard and
              delivers powerful, personalized insights.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/dashboard">
                  View Demo Dashboard
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/signup">Sign Up for Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Zap className="size-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Unified Dashboard</h3>
              <p className="mt-2 text-muted-foreground">
                See your total net worth across every wallet and chain. No more
                switching between apps.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <BrainCircuit className="size-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">AI-Driven Insights</h3>
              <p className="mt-2 text-muted-foreground">
                Get personalized tips from Gemini AI to optimize gas fees,
                manage risk, and find opportunities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <ShieldCheck className="size-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Secure & Private</h3>
              <p className="mt-2 text-muted-foreground">
                Your keys stay yours. We use read-only access to analyze your
                public wallet data securely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
