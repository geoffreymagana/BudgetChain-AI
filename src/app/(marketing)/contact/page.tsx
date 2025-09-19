import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
                <p className="text-lg text-muted-foreground">
                  Have a question, a feature request, or need help with your account? I'm here to help. Fill out the form or use one of the contact methods below.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Mail className="size-6 text-primary" />
                        <a href="mailto:geoffreymagana21@gmail.com" className="hover:underline">geoffreymagana21@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="size-6 text-primary" />
                        <span>Nairobi, Kenya</span>
                    </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>I typically respond within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Satoshi" />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Nakamoto" />
                        </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="satoshi@email.com" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select>
                            <SelectTrigger>
                            <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="support">General Support</SelectItem>
                            <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                            <SelectItem value="billing">Billing Inquiry</SelectItem>
                            <SelectItem value="press">Press & Media</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message..." className="min-h-32" />
                    </div>
                    <Button type="submit" className="w-full">Submit</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
