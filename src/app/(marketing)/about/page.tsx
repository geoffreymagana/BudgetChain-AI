import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Eye } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const teamMembers = [
    { name: "Geoffrey Magana", role: "Founder & CEO", avatar: "https://api.dicebear.com/9.x/identicon/svg?seed=Geoffrey" },
  ];

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Democratizing Crypto Portfolio Management
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                I believe everyone deserves clarity and control over their digital assets. BudgetChain AI was born from a passion for blockchain and a desire to build tools that empower users, from beginners to experts.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="w-full py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">My Story</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">From Complexity to Clarity</h2>
                        <p className="text-muted-foreground md:text-lg">
                            As a crypto enthusiast myself, I grew tired of juggling countless spreadsheets and browser tabs to track my assets across different chains. I knew there had to be a better way. I envisioned a single, intelligent platform that could unify everything, providing not just data, but actionable insights. That vision became BudgetChain AI.
                        </p>
                    </div>
                    <div className="grid gap-8">
                        <div className="flex gap-4">
                           <Target className="size-8 text-primary mt-1" />
                           <div>
                            <h3 className="font-semibold text-xl">Our Mission</h3>
                            <p className="text-muted-foreground">To provide the most intuitive and powerful AI-driven tools for managing cryptocurrency portfolios, making the decentralized financial world accessible to all.</p>
                           </div>
                        </div>
                         <div className="flex gap-4">
                           <Eye className="size-8 text-primary mt-1" />
                           <div>
                            <h3 className="font-semibold text-xl">Our Vision</h3>
                            <p className="text-muted-foreground">To be the trusted co-pilot for every crypto journey, empowering users to navigate the digital asset landscape with confidence and intelligence.</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet the Innovator</h2>
              <p className="mt-4 text-muted-foreground">
                I am a developer and crypto enthusiast dedicated to building the future of financial tools.
              </p>
            </div>
            <div className="flex justify-center">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="member avatar" />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
