

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  BrainCircuit,
  Check,
  ShieldCheck,
  Wallet,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="gradient-bg">
                <div className="gradients-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                </div>
            </div>
          </div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                AI-Powered Clarity for Your Entire Crypto Portfolio
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Connect all your wallets from Ethereum, Solana, and beyond.
                BudgetChain AI unifies your assets into a single dashboard and
                delivers powerful, personalized insights to help you navigate the complex world of crypto.
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

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32 bg-marketing-secondary">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything You Need to Master Your Crypto</h2>
              <p className="mt-4 text-muted-foreground">
                From aggregation to AI-driven analysis, BudgetChain AI provides the tools to manage your portfolio like a pro.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-background/50">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <Wallet className="size-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Unified Dashboard</h3>
                  <p className="mt-2 text-muted-foreground">
                    Connect MetaMask, Phantom, and more. See your total net worth across every wallet and chain in one clean interface.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <BrainCircuit className="size-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">AI-Driven Insights</h3>
                  <p className="mt-2 text-muted-foreground">
                    Ask natural language questions. Get personalized tips from Gemini AI to optimize gas fees, manage risk, and find opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <ShieldCheck className="size-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Secure & Private</h3>
                  <p className="mt-2 text-muted-foreground">
                    Your keys stay yours. We use read-only access to analyze your public wallet data securely, never asking for private keys.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32">
           <div className="container mx-auto px-4 md:px-6">
             <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h2>
              <p className="mt-4 text-muted-foreground">
                Start for free and unlock powerful features as you grow. No hidden fees.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Hobby</CardTitle>
                        <CardDescription>For individuals getting started in crypto.</CardDescription>
                        <div className="text-4xl font-bold mt-4">Free</div>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2"><Check className="text-primary"/>Up to 3 wallets</li>
                            <li className="flex items-center gap-2"><Check className="text-primary"/>Basic portfolio tracking</li>
                            <li className="flex items-center gap-2"><Check className="text-primary"/>5 AI insight queries per day</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" variant="outline" asChild><Link href="/signup">Get Started</Link></Button>
                    </CardFooter>
                </Card>
                 <Card className="flex flex-col border-primary relative">
                    <div className="absolute top-0 right-4 -mt-3">
                        <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>
                    </div>
                    <CardHeader>
                        <CardTitle>Pro</CardTitle>
                        <CardDescription>For active traders and DeFi enthusiasts.</CardDescription>
                        <div className="text-4xl font-bold mt-4">$15 <span className="text-lg font-normal text-muted-foreground">/ month</span></div>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                         <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2"><Check className="text-primary"/>Unlimited wallets</li>
                            <li className="flex items-center gap-2"><Check className="text-primary"/>Advanced portfolio analytics</li>
                            <li className="flex items-center gap-2"><Check className="text-primary"/>Unlimited AI insight queries</li>
                             <li className="flex items-center gap-2"><Check className="text-primary"/>Detailed monthly reports</li>
                             <li className="flex items-center gap-2"><Check className="text-primary"/>Priority support</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" asChild><Link href="/signup">Start Free Trial</Link></Button>
                    </CardFooter>
                </Card>
                 <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Enterprise</CardTitle>
                        <CardDescription>For funds, institutions, and power users.</CardDescription>
                        <div className="text-4xl font-bold mt-4">Custom</div>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                       <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2"><Check className="text-primary"/>All Pro features, plus:</li>
                            <li className="flex items-center gap-2"><Check className="text-primary"/>API access</li>
                            <li className="flex items-center gap-2"><Check className="text-primary"/>Dedicated account manager</li>
                            <li className="flex items-center gap-2"><Check className="text-primary"/>Custom integrations</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" variant="outline" asChild><Link href="/contact">Contact Sales</Link></Button>
                    </CardFooter>
                </Card>
            </div>
           </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32 bg-marketing-secondary">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
             <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-muted-foreground">
                Have questions? We've got answers.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                    <AccordionTrigger>Is my wallet data and information secure?</AccordionTrigger>
                    <AccordionContent>
                    Yes. Security and privacy are our top priorities. BudgetChain AI uses read-only permissions to access public on-chain data. We never ask for, nor do we have access to, your private keys or seed phrases. Your assets remain in your control at all times.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                    <AccordionTrigger>Which blockchains and wallets are supported?</AccordionTrigger>
                    <AccordionContent>
                    We currently support Ethereum, Solana, Polygon, and all EVM-compatible chains. You can connect popular wallets like MetaMask, Phantom, and any wallet compatible with WalletConnect. We are continuously adding support for more chains and wallets.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="faq-3">
                    <AccordionTrigger>How are the AI insights generated?</AccordionTrigger>
                    <AccordionContent>
                    Our AI features are powered by Google's Gemini models. The AI analyzes your anonymized portfolio data—such as asset allocation, transaction history, and gas fees—to provide personalized recommendations for optimization, risk management, and new opportunities, based on your stated goals.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="faq-4">
                    <AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
                    <AccordionContent>
                    Yes, you can cancel your Pro subscription at any time. You will retain access to Pro features until the end of your billing period. If you are on a free trial, you can cancel before it ends to avoid being charged.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}
