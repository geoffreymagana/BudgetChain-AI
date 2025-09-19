import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function SupportPage() {
  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-3xl font-bold">Support Center</h1>
        <p className="text-muted-foreground">Get help with your BudgetChain AI account.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>Can't find what you're looking for? Our team is here to help.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
               <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="account">Account Issues</SelectItem>
                  <SelectItem value="billing">Billing & Payments</SelectItem>
                  <SelectItem value="technical">Technical Support</SelectItem>
                   <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Describe your issue or feedback in detail..." className="min-h-32" />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I connect a new wallet?</AccordionTrigger>
              <AccordionContent>
                To connect a new wallet, navigate to the "Wallets" page from the main dashboard and click the "Add New Wallet" button. You will then be prompted to choose your wallet provider and authorize the connection.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are my private keys secure?</AccordionTrigger>
              <AccordionContent>
                Yes. BudgetChain AI never has access to your private keys. We use read-only permissions through secure wallet connection standards to analyze your public on-chain data. Your assets remain in your control at all times.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How are AI insights generated?</AccordionTrigger>
              <AccordionContent>
                Our AI insights are powered by Google's Gemini models. The AI analyzes your portfolio data—such as asset allocation, transaction history, and gas fees—to provide personalized recommendations for optimization, risk management, and new opportunities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
